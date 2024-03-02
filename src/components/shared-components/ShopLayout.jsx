import React from 'react'
import Navbar from './Navbar'
import {Outlet} from "react-router-dom";
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import Unauthenticated from './Unauthenticated';
import { useEffect } from 'react';
import { baseUrlFrontend } from '../../frontend-url';
function ShopLayout({data}) {



function isEmpty(obj) {
  return Object.keys(obj).length===0;
}
let checkDataObject= isEmpty(data);




useEffect(() => {
if (checkDataObject===true ) {
  window.location.replace(baseUrlFrontend)
}
}, [])


 return (   <>
    <Navbar data={data}/>
<Outlet/>
        
    </>
 )
 




}

export default ShopLayout