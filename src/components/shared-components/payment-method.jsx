import React from 'react'
import Header from './header'
import  {AiFillShopping,AiOutlinePlusCircle,AiOutlineMinus,AiFillPlusSquare,AiOutlinePlus} from "react-icons/ai";
import  {BiCart} from "react-icons/bi";
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import PaymentSuccess from './payment-success';
import { createsale } from '../../redux/actions/sale-actions';
import { useNavigate } from 'react-router-dom';
function AddSale({userData}) {
    
    const navigate=useNavigate()
const dispatch= useDispatch()
let owner;
let userId= userData._id
owner= userData.role === "storeKeeper" ? userData.employer : userData._id ;

const sale= useSelector((state)=>state.addSale);
const {loading,error,data,success}=sale;


 
  const [paymentMethod, setpaymentMethod] = useState("");
  const [currency, setcurrency] = useState(userData.country === "Zambia" && "Kwacha");
  const [ownerRate, setownerRate] = useState(0);
const [rate, setrate] = useState("");
const [tempRate, settempRate] = useState("");
const [additionalCost, setadditionalCost] = useState(null);

  let zimRate;
  
 let name= userData.name;

    let cart=useSelector((state)=>state.cart);
    let cartItems=cart.cartItems;
    let total=cartItems&& cartItems.reduce((item,{total})=>item+total,0);
    let totalPrice=currency ==="ZWL" ? total *rate : additionalCost? Number(additionalCost)+ total:null;
let items= cartItems;


    function recordSale() {
      dispatch(createsale(items,paymentMethod,totalPrice,userId,currency,owner,name))

    }
    
 
 
useEffect(() => {
  if (success) {
   
   
   
  navigate(`/home/payment-success/${currency}${totalPrice}`) 
 
   
  }


}, [success])

  return (
    <>
    
    <div class="page-body">
          <div class="container-xl">
            <div class="card card-lg">
              <div class="card-body">
                <div class="space-y-4 ">
                  <div className='d-flex justify-content-between'>
                 
                    <h2 class="mb-3">Select Payment Method and Currency</h2>
                   
                   
                  </div>
                  <div class="mb-3">
                  <label class="form-label">Select currency</label>
                  {
                    userData.country === "Zimbabwe"  ?  <select onChange={(e)=>setcurrency(e.target.value)} class="form-select">
                    <option value="">Choose Currency</option>
                    <option value="USD">USD</option>
                    <option value="ZWL">Zimbabwean Dollar</option>
                    
                    
                  </select> : <select onChange={(e)=>setcurrency(e.target.value)} class="form-select">
                    <option value="">Choose Currency</option>
                    <option value="Kwacha">Kwacha</option>
                    
                    
                  </select>
                  
                  
                  }
                 
               
                  </div>
                
                  <div>
                  <div class="mb-3">
                  <label class="form-label">Select payment method</label>
                  <div class="accordion-item">

<input type="text"   value={paymentMethod}               onChange={(e)=>setpaymentMethod(e.target.value)} class="form-control" placeholder="enter the payment method" aria-label="Search in website"/>
<br/>
{
currency==="ZWL"  ? <input type="text"   value={rate}               onChange={(e)=>setrate(e.target.value)} class="form-control" placeholder="enter your rate" aria-label="Search in website"/> :
  <input type="text"   value={additionalCost}               onChange={(e)=>setadditionalCost(e.target.value)} class="form-control" placeholder="enter additional cost" aria-label="Search in website"/> 

}

</div>
                  </div>
                  </div>
                
                  <div style={{display:"flex",justifyContent:"space-between"}}>
                  <p>
                 <h2>
                 The transcation total is
                    </h2>   
                  </p>
                  <p>
                    <h2>
                   {currency}   {
                        currency === "ZWL" ?  rate*total : totalPrice
                      }
                   
                    </h2>
                    
                  </p>
               
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between"}}>
                  <Link to="/home/add-sale" class="btn btn-danger ">
                       Back
                        </Link>
                        <a href="#" >
                
                  </a>
                    <button onClick={()=>recordSale()} class="btn btn-success" >
                       Finish
                    </button>


                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  )
}

export default AddSale