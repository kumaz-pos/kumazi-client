import { ADD_PRODUCT_REQUEST,ADD_PRODUCT_SUCCESS,ADD_PRODUCT_FAIL,GET_PRODUCTS_REQUEST,GET_PRODUCTS_SUCCESS,GET_PRODUCT_FAIL,GET_PRODUCTS_FAIL,GET_PRODUCT_SUCCESS ,GET_PRODUCT_REQUEST,UPDATE_PRODUCT_REQUEST,UPDATE_PRODUCT_SUCCESS,UPDATE_PRODUCT_FAIL,DELETE_PRODUCT_REQUEST,DELETE_PRODUCT_FAIL,DELETE_PRODUCT_SUCCESS} from "../constants/products";
import axios from "axios";
import { baseUrl } from "./baseUrl";
export const createproduct = ( name,unit,quantityBought,quantitiesSold,buyingPrice,sellingPrice,quantityInStock,valueOfStock,currency,shop,branch,owner) => async (dispatch, getState) => {
    try {
    let product={ name,unit,quantityBought,quantitiesSold,buyingPrice,sellingPrice,quantityInStock,valueOfStock,currency,shop,branch,owner};
        dispatch({ type: ADD_PRODUCT_REQUEST ,payload: product });
      const {
        shopOwnerSignin: { shopOwnerInfo },
      } = getState();
   
    
      const {data}  = await axios.post(`${baseUrl}create-product`, { name,unit,quantityBought,quantitiesSold,buyingPrice,sellingPrice,quantityInStock,valueOfStock,currency,shop,branch,owner} ,
      {
        headers:{  
          
         
          
          "Authorization":`Bearer ${shopOwnerInfo.token}`
  }
      }
      
         
    
     ) 
     
        dispatch({ type:ADD_PRODUCT_SUCCESS, payload: data });
      
    } catch (error) {
      dispatch({ type: ADD_PRODUCT_FAIL, payload: error.message });
    }
  };

 

export const getproducts =()=>async(dispatch,getState)=>{
  let shopowner= getState().shopOwnerSignin;
  let storekeeperLogin= getState().storeKeeperLogin;
  let storeKeeperInfo=storekeeperLogin.storeKeeperInfo

 
  let userInfo= shopowner.shopOwnerInfo ? shopowner.shopOwnerInfo : storeKeeperInfo
 
let ownerId= userInfo.role === "Owner" ? userInfo._id :userInfo.employer;

      dispatch({
          type:GET_PRODUCTS_REQUEST
      });
   
  
      try {
        const {data}  = await axios.get(`${baseUrl}get-products/${ownerId}`,{headers:{        
           
            
            "Authorization":`Bearer ${userInfo.token}`
    }
        }
        
           
      
       )  
   
     
            
  dispatch({type:GET_PRODUCTS_SUCCESS,payload:data});
       } catch (error) {
        
      const message=  error
   
          dispatch({type:GET_PRODUCTS_FAIL,payload:message})
  }
  
     
  }
export const getproduct =(id)=>async(dispatch,getState)=>{
    const {
        shopOwnerSignin: { shopOwnerInfo },
      }  = getState();

   
      dispatch({
          type:GET_PRODUCT_REQUEST
      });
   
  
      try {
        const {data}  = await axios.post(`${baseUrl}get-product/${id}`,{headers:{        
           
            
            "Authorization":`Bearer ${shopOwnerInfo.token}`
    }
        }
        
           
      
       )  
   
     
            
  dispatch({type:GET_PRODUCT_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:GET_PRODUCT_FAIL,payload:message})
  }
  
     
  }
export const updateproduct =(name,unit,quantityBought,quantitiesSold,buyingPrice,sellingPrice,quantityInStock,valueOfStock,currency,owner,id)=>async(dispatch,getState)=>{
  const {
    shopOwnerSignin: { shopOwnerInfo },
  } = getState()
      dispatch({
          type:UPDATE_PRODUCT_REQUEST
      });
   

      try {
        const {data}  = await axios.patch(`${baseUrl}update-product/${id}`,{name,unit,quantityBought,quantitiesSold,buyingPrice,sellingPrice,quantityInStock,valueOfStock,currency,owner},{headers:{        
           
            
            "Authorization":`Bearer ${shopOwnerInfo.token}`
    }
        }
        
           
      
       )  
       
   
     
            
  dispatch({type:UPDATE_PRODUCT_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:UPDATE_PRODUCT_FAIL,payload:message})
  }
  
     
  }


  export const deleteproduct =(id)=>async(dispatch,getState)=>{
    const {
        shopOwnerSignin: { shopOwnerInfo },
      }  = getState();

   
      dispatch({
          type:DELETE_PRODUCT_REQUEST
      });
   
  
      try {
        const {data}  = await axios.delete(`${baseUrl}delete-product/${id}`,{headers:{        
           
            
            "Authorization":`Bearer ${shopOwnerInfo.token}`
    }
        }
        
           
      
       )  

     
            
  dispatch({type:DELETE_PRODUCT_SUCCESS,payload:data});
       } catch (error) {
        console.log(error);
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:DELETE_PRODUCT_FAIL,payload:message})
  }
  
     
  }
 