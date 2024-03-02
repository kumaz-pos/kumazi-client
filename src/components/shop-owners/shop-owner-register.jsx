import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { shopownerregister } from '../../redux/actions/shopownerauth'
import { useState,useEffect } from 'react';
import {useNavigate} from "react-router-dom"
import AuthLoader from '../shared-components/Auth-Loader';
import { baseUrlFrontend } from '../../frontend-url';
function ShopOwnerRegister() {
  const [name, setname] = useState("")

  const [confirmPassword, setconfirmPassword] = useState("")
  const [password, setpassword] = useState("");
  let role="Owner"
 
  const [ip, setip] = useState("")

  function getIp() {
    fetch('https://ipapi.co/json/')
  .then( res => res.json())
  .then(response => {
      setip(response)
   })
   .catch((data, status) => {
      console.log('Request failed');
   })
  
  }

  //let country=ip.country_name;
  let country="Zimbabwe"
  //country === "Zambia" ?;
  const [phoneNumber, setphoneNumber] = useState(country==="Zambia" ? "+260" : "+263")

  const shopOwnerRegister = useSelector(state => state.shopOwnerRegister);
  
 
  const {shopOwnerInfo,loading,error}=shopOwnerRegister ;

  const dispatch = useDispatch();
  const navigate = useNavigate();

 function login(e) {
  e.preventDefault();
  if (confirmPassword !== password) {
    alert("Passwords are not matching")
  }

    dispatch(shopownerregister(name, phoneNumber, password,role,country));

  }

  useEffect(() => {
    if (shopOwnerInfo) {
     
      //navigate("/home")
      window.location.replace(`${baseUrlFrontend}/home`)
      
    }
    getIp()
    return () => {
      //
    };
    
   }, [shopOwnerInfo,navigate])

  return ( 
    <div class=" d-flex flex-column">
    <div class="page page-center">
      <div class="container container-tight py-4">
        <div class="text-center mb-4">
          <a href="." class="navbar-brand navbar-brand-autodark"><img src="./static/logo.svg" height="36" alt=""/></a>
        </div>
        <form class="card card-md" onSubmit={login}  autocomplete="off" novalidate>
          <div class="card-body">
            <h2 class="card-title text-center mb-4">Create new account</h2>
            {
              loading &&<AuthLoader/> 
              
            }
            {
              error && <p style={{color:"red",display:"flex",justifyContent:"center"}}>
{error.errorMessage
}
              </p>
            }
            <div class="mb-3">
              <label class="form-label">Name</label>
              <input onChange={(e)=>setname(e.target.value)} type="text" class="form-control" placeholder="Enter name"/>
            </div>
            <div class="mb-3">
              <label class="form-label">
                Phone Number
              </label>
              <input value={phoneNumber}  onChange={(e)=>setphoneNumber(e.target.value)} type="text" class="form-control" placeholder="Enter Phone Number"/>
            </div>
            <div class="mb-3">
              <label class="form-label">Password</label>
              <div class="input-group input-group-flat">
                <input  onChange={(e)=>setpassword(e.target.value)} type="password" class="form-control"  placeholder="Password"  autocomplete="off"/>
                <span class="input-group-text">
                  <a href="#" class="link-secondary" title="Show password" data-bs-toggle="tooltip">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
                  </a>
                </span>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Confirm password</label>
              <div class="input-group input-group-flat">
                <input  onChange={(e)=>setconfirmPassword(e.target.value)} type="password" class="form-control"  placeholder="Password"  autocomplete="off"/>
                <span class="input-group-text">
                  <a href="#" class="link-secondary" title="Show password" data-bs-toggle="tooltip">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
                  </a>
                </span>
              </div>
            </div>
           
            <div class="form-footer">
              <button type="submit" class="btn btn-primary w-100">Create new account</button>
            </div>
          </div>
        </form>
        <div class="text-center text-muted mt-3">
          Already have account? <a href="./sign-in.html" tabindex="-1">Sign in</a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ShopOwnerRegister