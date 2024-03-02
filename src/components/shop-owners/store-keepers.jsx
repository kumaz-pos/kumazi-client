import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getstorekeepers,deletestorekeeper } from '../../redux/actions/storekeeper-actions';
import Placeholder from '../shared-components/placeholder';
import { useEffect } from 'react';

import { Link } from 'react-router-dom';
function StoreKeepers({userData}) {
  const dispatch= useDispatch();
  const userSignin= useSelector((state)=>state.shopOwnerSignin);

  const storeKeepers= useSelector((state)=>state.getStoreKeepers);
  let userId= userData._id
  const {data,error,loading}= storeKeepers;
 
  let getStoreKeepers=loading ? "loading.." : error ? "error.." : data ?  data.filter((item)=>item.employer===userId) : null
  
 
useEffect(() => {
dispatch(getstorekeepers())
}, [getstorekeepers])

function deleteStoreKeeper(id) {
  dispatch(deletestorekeeper(id))
 window.location.reload()
}
  return (
    <div class="page-body">
    <div class="container-xl">
      <div class="row row-cards">
  
      
   
       
    
      
    
  
      
    
        <div class="col-md-6 col-lg-3" style={{display:"grid",gap:"1rem"}}>
          {
      
            loading ? <Placeholder/> : getStoreKeepers && getStoreKeepers.length ===0 ? <div class="card">
            <div class="card-header">
              <h3 class="card-title">You have not added any employees yet.Please add new employee</h3>
              <div class="card-actions">
                <Link to="/home/add-store-keeper" class="btn btn-primary">
                  
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
            </div> : data ?  getStoreKeepers.map((item)=>{
              return                 <div class="card">
         
              <div class="card-body">
                <h3 class="card-title">{`${item.name} - ${item.phoneNumber}`}</h3>
                <p class="text-muted">
                  
                  </p>
              
              </div>
              
              <div class="card-footer" style={{display:"flex",gap:"1rem"}}>
           
                <Link to={`/home/shop/store-keeper-sales/${item._id}`} class="btn btn-primary">
                  See Sales
                </Link>
                <button onClick={()=>deleteStoreKeeper(item._id)} class="btn btn-danger">Delete</button>
              </div>
              </div>
            }) : error ? <h2>Error...</h2> : null
           
           
          }
       
        
        </div>
     
  

      </div>
    </div>
  </div>
   
   
  )
}

export default StoreKeepers