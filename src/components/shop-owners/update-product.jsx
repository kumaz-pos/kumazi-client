import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { createshop,getshop ,updateshop,getshops} from '../../redux/actions/shop-actions'
import { updateproduct,getproduct ,getproducts} from '../../redux/actions/products-actions'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import AuthLoader from '../shared-components/Auth-Loader'
import { useParams } from 'react-router-dom'
function UpdateProduct() {
const id= useParams().id;

  const navigate= useNavigate();
  const products= useSelector((state)=>state.getProducts);
  let {loading,success,data,error}=products
  let info=loading ? "loading" : error ? "error": data.filter((item)=>item._id===id);

  const [name, setname] = useState(info[0].name)
  const [unit, setunit] = useState(info[0].unit)
  const [quantityBought, setquantityBought] = useState(info[0].quantityBought)
  const [quantitiesSold, setquantitiesSold] = useState(info[0].quantitiesSold)
  const [buyingPrice, setbuyingPrice] = useState(info[0].buyingPrice)

  const [sellingPrice, setsellingPrice] = useState(info[0].sellingPrice)
  let quantityInStock= quantityBought-quantitiesSold;
  let valueOfStock= quantityInStock*buyingPrice

  const [currency, setcurrency] = useState(info[0].currency)

 
  const userSignin= useSelector((state)=>state.shopOwnerSignin);
  let shopOwnerInfo= userSignin.shopOwnerInfo;
  let userId= shopOwnerInfo._id;
  let token= shopOwnerInfo.token;
    
 
 
let owner= userId

 

  
const dispatch= useDispatch();
    function updateProduct(e) {
      e.preventDefault();
      dispatch(updateproduct(name,unit,quantityBought,quantitiesSold,buyingPrice,sellingPrice,quantityInStock,valueOfStock,currency,owner,id))
     
  navigate("/home/products") 
    }

useEffect(() => {
    dispatch(getproduct(id))
    dispatch(getproducts(token))

}, [getproduct])

  
  return (
    <div class="page-body">
          <div class="container-xl">

          <form class="card" onSubmit={updateProduct}>
                <div class="card-header">
                  <h3 class="card-title">Update Shop</h3>
                </div>
                <div class="card-body">
              
                       
                  <div class="mb-3 col">
                    <label class="col-3 col-form-label required"> Name</label>
                    <div class="col">
                      <input value={name} type="text" onChange={(e)=>setname(e.target.value)} class="form-control" aria-describedby="emailHelp" placeholder="Enter product name"/>
                    
                    </div>
                  </div>
                  <div class="mb-3 col">
                    <label class="col-3 col-form-label required">Unit</label>
                    <div class="col">
                      <input value={unit} type="text" onChange={(e)=>setunit(e.target.value)} class="form-control" aria-describedby="emailHelp" placeholder="Enter unit"/>
                    
                    </div>
                  </div>
                  <div class="mb-3 col">
                    <label class="col-3 col-form-label required">Quantity Bought</label>
                    <div class="col">
                      <input value={quantityBought} type="text" onChange={(e)=>setquantityBought(e.target.value)} class="form-control" aria-describedby="emailHelp" placeholder="Quantity bought"/>
                    
                    </div>
                  </div>
                  <div class="mb-3 col">
                    <label class="col-3 col-form-label required">Quantities Sold</label>
                    <div class="col">
                      <input value={quantitiesSold} type="text" onChange={(e)=>setquantitiesSold(e.target.value)} class="form-control" aria-describedby="emailHelp" placeholder="Quantity sold"/>
                    
                    </div>
                  </div>
                  <div class="mb-3 col">
                    <label class="col-3 col-form-label required">Buying Price</label>
                    <div class="col">
                      <input value={buyingPrice} type="text" onChange={(e)=>setbuyingPrice(e.target.value)} class="form-control" aria-describedby="emailHelp" placeholder="Enter buying price"/>
                    
                    </div>
                  </div>
                  <div class="mb-3 col">
                    <label class="col-3 col-form-label required">Selling Price</label>
                    <div class="col">
                      <input value={sellingPrice} type="text" onChange={(e)=>setsellingPrice(e.target.value)} class="form-control" aria-describedby="emailHelp" placeholder="Enter selling price"/>
                    
                    </div>
                  </div>
                  <div class="mb-3 col">
                    <label class="col-3 col-form-label required">Stock Left </label>
                    <div class="col">
                      <input disabled value={quantityInStock} type="text"  class="form-control" aria-describedby="emailHelp" />
                    
                    </div>
                  </div>
                  <div class="mb-3 col">
                    <label class="col-3 col-form-label required">Value of Stock </label>
                    <div class="col">
                      <input value={valueOfStock} type="text" disabled class="form-control" aria-describedby="emailHelp" placeholder="Enter shop name"/>
                    
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

export default UpdateProduct