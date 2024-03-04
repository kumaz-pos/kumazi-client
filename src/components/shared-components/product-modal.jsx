import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { createproduct } from '../../redux/actions/products-actions'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import AuthLoader from './Auth-Loader'
import { baseUrlFrontend } from '../../frontend-url'
function ProductModal({userData}) {

  const navigate= useNavigate();
    const [name, setname] = useState("")
    const [unit, setunit] = useState("");
    const [currency, setcurrency] = useState("USD")
    const [quantityBought, setquantityBought] = useState(0)
    const [quantitiesSold, setquantitiesSold] = useState(0)
    const userSignin= useSelector((state)=>state.shopOwnerSignin);
    let shopOwnerInfo= userSignin.shopOwnerInfo;
    let owner=shopOwnerInfo._id
    const [buyingPrice, setbuyingPrice] = useState(0)

    const [sellingPrice, setsellingPrice] = useState(0)
    const products= useSelector((state)=>state.addProduct);
    
    let {loading,success,data}=products
console.log(userData);
 
  let quantityInStock=quantityBought-quantitiesSold
    let valueOfStock= buyingPrice*quantityBought;

    let branch="65c74c93eab5fb86e59c2798"
let shop="65c62e57af79f6048a8adb81"
const dispatch= useDispatch();
    function addProduct(e) {
      e.preventDefault();
      dispatch(createproduct( name,unit,quantityBought,quantitiesSold,buyingPrice,sellingPrice,quantityInStock,valueOfStock,currency,shop,branch,owner))

    }



useEffect(() => {
  if (success) {
    alert("You have succesfully added a new product now you are being directed to the products page")
  
   
  
  //window.location.reload()
  window.location.replace(`${baseUrlFrontend}/home/products`)

  if (sessionStorage.getItem("reloaded")==="yes") {
   navigate("/home/products") 
  }

//
   
  }
}, [success])

 
  return (
    <div class="page-body">
          <div class="container-xl">

          <form class="card" onSubmit={addProduct}>
                <div class="card-header">
                  <h3 class="card-title">Add Product</h3>
                </div>
                <div class="card-body">
                  <div class="mb-3 col">
                    <label class="col-3 col-form-label required">Name</label>
                    <div class="col">
                      <input type="text" onChange={(e)=>setname(e.target.value)} class="form-control" aria-describedby="emailHelp" placeholder="Enter name"/>
                    
                    </div>
                  </div>
                  <div class="mb-3 col">
                    <label class="col-3 col-form-label required">Unit</label>
                    <div class="col">
                      <input type="text" onChange={(e)=>setunit(e.target.value)} class="form-control" aria-describedby="emailHelp" placeholder="Unit can be in grams or liters e.g 100gram"/>
                    
                    </div>
                  </div>
                  <div class="mb-3 col">
                    <label class="col-3 col-form-label required">Quantity Bought</label>
                    <div class="col">
                      <input onChange={(e)=>setquantityBought(e.target.value)} type="number" class="form-control" aria-describedby="emailHelp" placeholder="Quantity Bought"/>
                    
                    </div>
                  </div>
                  <div class="mb-3 col">
                    <label class="col-3 col-form-label required">Quantities Sold</label>
                    <div class="col">
                      <input onChange={(e)=>setquantitiesSold(e.target.value)} type="number" class="form-control" aria-describedby="emailHelp" placeholder="Quantity Sold"/>
                    
                    </div>
                  </div>
                  <div class="mb-3 col">
                    <label class="col-3 col-form-label required">Buying Price</label>
                    <div class="col">
                      <input onChange={(e)=>setbuyingPrice(e.target.value)} type="text" class="form-control" aria-describedby="emailHelp" placeholder="Buying Price"/>
                    
                    </div>
                  </div>
                  <div class="mb-3 col">
                    <label class="col-3 col-form-label required">Selling Price</label>
                    <div class="col">
                      <input onChange={(e)=>setsellingPrice(e.target.value)} type="text" class="form-control" aria-describedby="emailHelp" placeholder="Selling Price"/>
                    
                    </div>
                  </div>
                
                {
                  userData.country ==="Zimbabwe" && <div className="mb-3 col">
                    <label class="col-3 col-form-label required">Currency</label>
                      <select onClick={(e)=>setcurrency(e.target.value)} class="form-select">
                    <option value="">Choose Currency You Bought the Product</option>
                    <option value="Zimbabwean Dollar">Zimbabwean Dollar</option>
                    <option value="USD">USD</option>
                   
                  </select>
                  </div>
                }
               
                
                </div>
                <div class="card-footer text-end">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
          </div>
      
    </div>
        
  
  
   
  )
}

export default ProductModal