import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getshops,deleteshop } from '../../redux/actions/shop-actions';
import { useEffect } from 'react';
import Placeholder from './placeholder';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
function Shops() {
  const dispatch= useDispatch();
  const shops= useSelector((state)=>state.getShops);
  const {data,error,laoding}= shops;
  let cookie= JSON.parse(Cookies.get("shopOwnerInfo"));
  console.log(cookie);
  let token=cookie.token
useEffect(() => {
dispatch(getshops(token))
}, [getshops])


function deleteShop(id) {
    dispatch(deleteshop(id,token))
   window.location.reload()
}
  return (
    <div class="page-body">
    <div class="container-xl">
      <div class="row row-cards">
  
      
   
       
    
      
    
  
      
    
        <div class="col-md-6 col-lg-3">
        {
laoding ? <Placeholder/> : data? data.map((item)=>{
    let id= item._id
  return  <div class="card">
        
  <div class="card-body">
    <h3 class="card-title">{item.shopName}</h3>
   
  </div>

  <div class="card-footer" style={{display:"flex",gap:"0.2rem"}}>
    <Link to={`/home/shop/update-shop/${item._id}`} class="btn btn-primary">Update</Link>
    <button  class="btn btn-success">See Shop</button>
    <button onClick={()=>deleteShop(id)} class="btn btn-danger">Delete</button>
  </div>
</div>
}) : <h2>
    Error
</h2>
            }
         
        </div>
     
  

      </div>
    </div>
  </div>
   
   
  )
}

export default Shops