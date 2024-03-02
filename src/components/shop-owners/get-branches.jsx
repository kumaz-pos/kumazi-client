import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getbranches,deletebranch } from '../../redux/actions/branch-actions';
import { useEffect } from 'react';
import Placeholder from '../shared-components/placeholder';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
function Branches() {
  const dispatch= useDispatch();
  const branches= useSelector((state)=>state.getBranches);
  const {data,error,loading}= branches;
 
  let cookie= JSON.parse(Cookies.get("shopOwnerInfo"));
 
  let token=cookie.token
useEffect(() => {
dispatch(getbranches(token))
}, [getbranches])


function deleteShop(id) {
    dispatch(deletebranch(id,token))
   window.location.reload()
}
  return (
    <div class="page-body">
    <div class="container-xl">
      <div class="row row-cards">
  
      
   
       
    
      
    
  
      
    
        <div class="col-md-6 col-lg-3">
        {
loading ? <Placeholder/> : data.msg  ? <div class="col">
<div class="card">
  <div class="card-header">
    <h3 class="card-title">You have not added any branches yet.Please add new branch</h3>
    <div class="card-actions">
      <Link to="/home/add-branch" class="btn btn-primary">
        
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
</div>
</div>: data ? data.map((item)=>{
    let id= item._id
  return  <div class="card">
        
  <div class="card-body">
    <h3 class="card-title">{item.branchName}</h3>
   
  </div>

  <div class="card-footer" style={{display:"flex",gap:"0.2rem"}}>
    <Link to={`/home/shop/update-shop/${item._id}`} class="btn btn-primary">Update</Link>
    <button  class="btn btn-success">See Shop</button>
    <button onClick={()=>deleteShop(id)} class="btn btn-danger">Delete</button>
  </div>
</div>
}) :  <h2>
    Error
</h2> 
            }
         
        </div>
     
  

      </div>
    </div>
  </div>
   
   
  )
}

export default Branches