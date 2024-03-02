import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { createshop,getshop ,updateshop,getshops} from '../../redux/actions/shop-actions'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import AuthLoader from './Auth-Loader';
import { useParams } from 'react-router-dom'
function UpdateShop() {
const id= useParams().id;

  const navigate= useNavigate();
  const shops= useSelector((state)=>state.getShops);

 

    
 
 


 
    let {loading,success,data,error}=shops
  
    let info=loading ? "loading" : error ? "error": data.filter((item)=>item._id===id);

    let cookie= JSON.parse(Cookies.get("shopOwnerInfo"));
    let token=cookie.token
    const [shopName, setShopName] = useState(info[0].shopName)
const dispatch= useDispatch();
    function updateShop(e) {
      e.preventDefault();
      dispatch(updateshop(shopName,id,token))
     
    navigate("/home/shops") 
    }

useEffect(() => {
    dispatch(getshop(id,token))
    dispatch(getshops(token))

}, [getshop])

  
  return (
    <div class="page-body">
          <div class="container-xl">

          <form class="card" onSubmit={updateShop}>
                <div class="card-header">
                  <h3 class="card-title">Update Shop</h3>
                </div>
                <div class="card-body">
                  <div class="mb-3 col">
                    <label class="col-3 col-form-label required">Shop Name</label>
                    <div class="col">
                      <input value={shopName} type="text" onChange={(e)=>setShopName(e.target.value)} class="form-control" aria-describedby="emailHelp" placeholder="Enter shop name"/>
                    
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

export default UpdateShop