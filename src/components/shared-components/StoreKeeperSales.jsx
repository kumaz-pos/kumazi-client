import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react';
import Placeholder from './placeholder';
import { getstorekeepersales } from '../../redux/actions/sale-actions';
import { Link,useParams } from 'react-router-dom';
import {format} from "date-fns"
function StoreKeeperSales() {
  const id= useParams().id
  const disaptch=useDispatch();
  const userSignin= useSelector((state)=>state.shopOwnerSignin);
  const sales= useSelector((state)=>state.getStorekeeperSales);
  
  const {loading,data,error}= sales

 

useEffect(() => {
disaptch(getstorekeepersales(id))
}, [getstorekeepersales])

  return (
    <div class="page-body">
    <div class="container-xl">
      <div class="row row-cards">
  
      
   
       
    
      
    
  
      {
      loading ? <Placeholder/> : data.length === 0 ? <div class="card">
      <div class="card-header">
        <h3 class="card-title">There are no sales yet</h3>
        <div class="card-actions">
      
        </div>
      </div>
      <div class="card-body p-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-100" preserveAspectRatio="none" width="400" height="200" viewBox="0 0 400 200" fill="transparent" stroke="var(--tblr-border-color, #b8cef1)">
          <line x1="0" y1="0" x2="400" y2="200"></line>
          <line x1="0" y1="200" x2="400" y2="0"></line>
        </svg>
      </div>
      </div> : data.length !==0?  data.map((item)=>{
return   <div  style={{display:'grid',gap:"1rem"}} class="col-md-6 col-lg-3">
 <div className="card">
 <div class="card-body" style={{display:"grid",justifyContent:"center"}}>
<h3 class="card-title">Items Bought</h3>
<p class="text-muted">  
{
  item.items.map((x)=>{
    return  <ul>
 <li >
      {
       x.name
     } {x.unit} 
   </li> 
   <li>
   Unit Price - {x.price}
   </li>
   <li>
   Items bought - {x.qty}
   </li>
   <li>
   Total Price - {x.total}
   </li>
   
  
    </ul>
   
  })
}
<ul>
<li>
    Paid using - {item.paymentMethod}
   </li>
   <li>
    <h4>
    Total Sales Value -  {item.currency} {
    item.totalPrice
  }
    </h4>
 
   </li>
   <li>
    Sale recorded by {
      item.name
    }
   </li>
   <li>
    Sale recorded at {
      format(item.createdAt,"dd.MM.yyyy 'T'HH:mm:ss")
    }
   </li>
</ul>

  <h4>

  </h4>




</p>
{
  /** <div class="card-footer" style={{display:"grid",gap:"0.5rem"}}>
    <Link to={`/home/update-product/${item._id}`} class="btn btn-primary">Update</Link>
    <button  class="btn btn-success"> Product Perfomance</button>
    <button onClick={()=>{
      
      window.location.reload()
      }} class="btn btn-danger">Delete</button>
  </div>*/
}

</div>
 </div>

</div>

}) : null
    }
        
    
 

      </div>
    </div>
  </div>
   
   
  )
}

export default StoreKeeperSales

