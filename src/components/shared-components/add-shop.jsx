import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { createshop } from '../../redux/actions/shop-actions'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import AuthLoader from './Auth-Loader'
function AddShop() {

  const navigate= useNavigate();
    const [shopName, setShopName] = useState("")
 
    const shops= useSelector((state)=>state.addShop);
 
    let {loading,success,data}=shops

    let cookie= JSON.parse(Cookies.get("shopOwnerInfo"));
    let token=cookie.token

const dispatch= useDispatch();
    function addShop(e) {
      e.preventDefault();
      dispatch(createshop(shopName,token))

    }

useEffect(() => {
  if (success) {
    alert("You have succesfully added a new shop now you are being directed to the home page")
  
   
  
   
   
    navigate("/home") 

   
  }
}, [success])

  
  return (
    <div class="page-body">
          <div class="container-xl">

          <form class="card" onSubmit={addShop}>
                <div class="card-header">
                  <h3 class="card-title">Add Shop</h3>
                </div>
                <div class="card-body">
                  <div class="mb-3 col">
                    <label class="col-3 col-form-label required">Shop Name</label>
                    <div class="col">
                      <input type="text" onChange={(e)=>setShopName(e.target.value)} class="form-control" aria-describedby="emailHelp" placeholder="Enter shop name"/>
                    
                    </div>
                  </div>
              
               
                
                </div>
                <div class="card-footer text-end">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
          </div>
      
    </div>
        
  
  
   
  )
}

export default AddShop