import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react';
import Placeholder from './placeholder';
import { getsales,getstorekeepersales } from '../../redux/actions/sale-actions';
import { Link } from 'react-router-dom';
import {format} from "date-fns"
import Error from './Error';
function Sales({ userData}) {
  const disaptch=useDispatch();

  let userId= userData._id;

  let owner;
  owner= userData.role === "storeKeeper" ? userData.employer : userData._id ;

  const sales= useSelector((state)=>state.getSales);
 


  const {loading,data,error}= sales;

  let tuckshopsales= loading ? "loading..." : error ? "error" : data;
  
useEffect(() => {
disaptch(getsales(userId))
disaptch(getstorekeepersales())
}, [getsales,getstorekeepersales])

  return (
    <div class="page-body">
    <div class="container-xl">
      <div class="row row-cards">
  
      
   
       
    
      
    
  
      {
      loading ? <Placeholder/> : tuckshopsales.length === 0 ?  <div class="card">
      <div class="card-header">
        <h3 class="card-title">You have not added any sales  yet.Please add new sale</h3>
        <div class="card-actions">
          <Link to="/home/add-sale" class="btn btn-primary">
            
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
      </div> :  error ? <Error/>: tuckshopsales.length !==0?  tuckshopsales.map((item)=>{
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
    Total Sales Value - {item.currency} {
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

export default Sales

{
  /**   
        <div class="col-md-6 col-lg-3">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Card with footer button</h3>
              <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima
                neque pariatur perferendis sed suscipit velit vitae voluptatem.</p>
            </div>
        
            <div class="card-footer" style={{display:"flex",gap:"1rem"}}>
              <a href="#" class="btn btn-primary">Update</a>
              <a href="#" class="btn btn-danger">Delete</a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Card with footer button</h3>
              <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima
                neque pariatur perferendis sed suscipit velit vitae voluptatem.</p>
            </div>
        
            <div class="card-footer" style={{display:"flex",gap:"1rem"}}>
              <a href="#" class="btn btn-primary">Update</a>
              <a href="#" class="btn btn-danger">Delete</a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Card with footer button</h3>
              <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima
                neque pariatur perferendis sed suscipit velit vitae voluptatem.</p>
            </div>
        
            <div class="card-footer" style={{display:"flex",gap:"1rem"}}>
              <a href="#" class="btn btn-primary">Update</a>
              <a href="#" class="btn btn-danger">Delete</a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Card with footer button</h3>
              <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima
                neque pariatur perferendis sed suscipit velit vitae voluptatem.</p>
            </div>
        
            <div class="card-footer" style={{display:"flex",gap:"1rem"}}>
              <a href="#" class="btn btn-primary">Update</a>
              <a href="#" class="btn btn-danger">Delete</a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Card with footer button</h3>
              <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima
                neque pariatur perferendis sed suscipit velit vitae voluptatem.</p>
            </div>
        
            <div class="card-footer" style={{display:"flex",gap:"1rem"}}>
              <a href="#" class="btn btn-primary">Update</a>
              <a href="#" class="btn btn-danger">Delete</a>
            </div>
          </div>
        </div>
    
   */
}