import React from 'react'
import Header from './header'
import  {AiFillShopping,AiOutlinePlusCircle,AiOutlineMinus,AiFillPlusSquare,AiOutlinePlus} from "react-icons/ai";
import  {BiCart} from "react-icons/bi";
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import {getproducts} from "../../redux/actions/products-actions"
import { useSelector,useDispatch } from 'react-redux';
import Placeholder from './placeholder';
import Button from './add-to-cart';
import AddButton from './AddButton';
import { addToCart , removeFromCart} from '../../redux/actions/cart';
function AddSale({userData}) {
 
  
  let cart=useSelector((state)=>state.cart);
  let cartItems=cart.cartItems;
  let owner;
  owner= userData.role === "storeKeeper" ? userData.employer : userData._id ;
  let products= useSelector((state)=>state.getProducts);

const [current, setcurrent] = useState(""||null);
const [count, setcount] = useState(0)
  let {loading,error,data}= products
  let tuckshopproducts= loading ? "loading..." : error ? "error" : data.filter((item)=>(item.owner===owner));
let total=cartItems&& cartItems.reduce((item,{total})=>item+total,0);

  const dispatch= useDispatch()
  const [searchPhrase, setsearchPhrase] = useState("")



 
 

  useEffect(() => {
   dispatch(getproducts())
  }, [])
  function handleClick(e) {
    setcurrent(e.target.id)
  }
  function addItems() {
    setcount(count+1)
  }
  
  let shopItems;
if (searchPhrase) {
  shopItems= loading ? "loading" : error ? "error" :
  tuckshopproducts ? tuckshopproducts.filter(p=>p.name.toLowerCase().includes(searchPhrase.toLowerCase())) : null
}else{
  shopItems= loading ? "loading" : error ? "error" :
  tuckshopproducts
}

  return (
    <>
    
    <div class="page-body">
          <div class="container-xl">
            <div class="card card-lg">
              <div class="card-body">
                <div class="space-y-4 ">
                  <div className='d-flex justify-content-between'>
                    <h2 class="mb-3">Add to Cart</h2>
                    <p className='d-flex ' style={{gap:"1rem",alignContent:"center",alignItems:"center"}}>
                    <h2>Total-{
                     total
                      }</h2>
                    <Link to="/home/payment-method" class="btn btn-primary ">
                          Next
                        </Link>
                    </p>
                   
                  </div>
                
                  <div class="accordion-item">

<input type="text"   value={searchPhrase}               onChange={(e)=>setsearchPhrase(e.target.value)} class="form-control" placeholder="Search products" aria-label="Search in website"/>
</div>
                  <div>
                  {
      loading ? <Placeholder/> : shopItems.length === 0 ? <div class="card">
      <div class="card-header">
        <h3 class="card-title">Product not found</h3>
        <div class="card-actions">
          <Link to="/home/add-product" class="btn btn-primary">
            
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
            Add new
          </Link>
        </div>
      </div>
      <div class="card-body p-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-100" preserveAspectRatio="none" width="400" height="200" viewBox="0 0 400 200" fill="transparent" stroke="var(--tblr-border-color, #b8cef1)">
          <line x1="0" y1="0" x2="400" y2="200"></line>
          <line x1="0" y1="200" x2="400" y2="0"></line>
        </svg>
      </div>
      </div> : shopItems.length !==0?  shopItems.map((item)=>{
return    <div id="faq-2" key={item._id} class="accordion" role="tablist" >

<div className='mt-2 mb-2 d-flex justify-content-between align-content-center align-items-center'>
<h3 class="card-title">{item.name} - {item.currency} {item.sellingPrice}</h3>
{
  item.stockLeft <= 0 ? <p>Item out of stock</p> :<AddButton removeFromCart={removeFromCart} dispatch={dispatch}  addToCart={addToCart} productId={item._id}  addItems={addItems}/>

}
 
</div>



</div>

})
: null
    }    
                   
                 
               
               
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