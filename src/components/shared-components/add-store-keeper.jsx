import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {storekeeperregister } from '../../redux/actions/storekeeper-actions'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import AuthLoader from './Auth-Loader'
import { baseUrlFrontend } from '../../frontend-url'
function AddStoreKeeper({userData}) {

  const navigate= useNavigate();
  let country= userData.country
    const [name, setName] = useState("");
    const [phoneNumber, setphoneNumber] = useState(country==="Zambia" ? "+260" : "+263")
    const [password, setpassword] = useState("");
 
    const storeKeepers= useSelector((state)=>state.storeKeeperRegister);
 
    let {loading,success,data,error}=storeKeepers
    const userSignin= useSelector((state)=>state.shopOwnerSignin);
 
    let shopOwnerInfo= userSignin.shopOwnerInfo;
    let userId= shopOwnerInfo._id;
  let employer=userId
let role="storeKeeper"
console.log(error);
const dispatch= useDispatch();
    function addStoreKeeper(e) {
      e.preventDefault();
      dispatch(storekeeperregister(name,phoneNumber,password,employer,country))

    }

useEffect(() => {
  if (success) {
    alert("You have succesfully added a new store keeper now you are being directed to the employees page")
  
   
  
   
   
    window.location.replace(`${baseUrlFrontend}/home/store-keepers`)

    
  }
}, [success])

  
  return (
    <div class="page-body">
          <div class="container-xl">

          <form class="card" onSubmit={addStoreKeeper}>
                <div class="card-header">
                  <h3 class="card-title">Add Store Keeper</h3>
                </div>
               
                <div class="card-body">
                {
              error && <p style={{color:"red",display:"flex",justifyContent:"center"}}>
{error
}
              </p>
            }
                  <div class="mb-3 col">
                    <label class="row col-form-label required">Store Keeper Name</label>
                    <div class="row">
                      <input type="text" onChange={(e)=>setName(e.target.value)} class="form-control" aria-describedby="emailHelp" />
                    
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label class="row col-form-label required">Store Keeper Phone Number</label>
                    <div class="row">
                      <input type="text" value={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)} class="form-control" aria-describedby="emailHelp" />
                    
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label class="row col-form-label required">Store Keeper Password</label>
                    <div class="row">
                      <input type="text" onChange={(e)=>setpassword(e.target.value)} class="form-control" aria-describedby="emailHelp" />
                    
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

export default  AddStoreKeeper