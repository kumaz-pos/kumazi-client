import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getproducts } from '../../redux/actions/products-actions';
import { useEffect } from 'react';

import Placeholder from './placeholder';
import { Link } from 'react-router-dom';
import { deleteproduct } from '../../redux/actions/products-actions';

import Error from './Error';
function Products({ userData}) {
 
  
  const dispatch= useDispatch();
  const products= useSelector((state)=>state.getProducts);
let userId= userData._id;

  let owner;
  owner= userData.role === "storeKeeper" ? userData.employer : userData._id ;
  const {data,error,loading}= products;

let tuckshopproducts= loading ? "loading..." : error ? "error" : data.filter((item)=>(item.owner===owner));

useEffect(() => {
dispatch(getproducts())
}, [getproducts])


  return (
    <div class="page-body">
    <div class="container-xl">
      <div class="row row-cards">
  
      
   
       
    
      
    
  
      
    
    {
      loading ? <Placeholder/> : tuckshopproducts.length === 0 ?   <div class="card">
      <div class="card-header">
        <h3 class="card-title">You have not added any products yet.Please add new product</h3>
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
      </div> : error ? <Error/>:  tuckshopproducts.map((item)=>{
        return   <div  style={{display:'grid',gap:"1rem"}} class="col-md-6 col-lg-3">
         <div className="card">
         <div class="card-body" style={{display:"grid",justifyContent:"center"}}>
        <h3 class="card-title">{item.name} - {item.unit}</h3>
        <p class="text-muted">  
        <li>
        Items remaining -  {
            item.quantityInStock
          }
        </li>
        <li>
        Items Bought -  {
            item.quantityBought
          }
        </li>
        <li>
        Value of Stock-  {item.currency} {
            item.quantityInStock*  item.buyingPrice
          }
        </li>
        <li>
        Buying Price- {item.currency} {
            item.buyingPrice
          } 
        </li>
        <li>
        Selling Price-  {item.currency} {
            item.sellingPrice
          } 
        </li>
        
        
        
        </p>
        {
           userData.role === "Owner" &&   <div class="card-footer" style={{display:"grid",gap:"0.5rem"}}>
           <Link to={`/home/update-product/${item._id}`} class="btn btn-primary">Update</Link>
         {
           <button onClick={()=>{
             dispatch(deleteproduct(item._id))
           window.location.reload()
             }} class="btn btn-danger">Delete</button>
         }
         
         </div>
        }
       
        </div>
         </div>
        
        </div>
        
        }) 
         
      
      
   
    }
        

        
    
    
  

      </div>
    </div>
  </div>
   
   
  )


  
}

export default Products