import * as actionTypes from "../constants/cart";
import axios from "axios"
import Cookies from "js-cookie";
import { baseUrl } from "./baseUrl";
export const addToCart=(productId,qty)=>async(dispatch,getState)=>{
    let shopowner= getState().shopOwnerSignin;
    let storekeeperLogin= getState().storeKeeperLogin;
    let storeKeeperInfo=storekeeperLogin.storeKeeperInfo
  
   
    let userInfo= shopowner.shopOwnerInfo ? shopowner.shopOwnerInfo : storeKeeperInfo
   
    
try {
    let {data}= await axios.get(`${baseUrl}get-product/${productId}`,{
        headers:{
            Authorization:`Bearer ${userInfo.token}`
        }
    });
   let tempTotal=Number(data.sellingPrice*qty).toFixed(2)
dispatch({
    type:actionTypes.ADD_TO_CART,
    payload:{
        productId:productId,
        name:data.name,
        unit:data.unit,
        price:data.sellingPrice,
        qty,
        total:Number(tempTotal)
    }
})
const {cart:{cartItems}}=getState();
Cookies.set("cartItems", JSON.stringify(cartItems));




} catch (error) {
    console.log(error);
}
}

export const removeFromCart=(productId)=>(dispatch,getState)=>{
   
    
    dispatch({type:actionTypes.REMOVE_FROM_CART,payload:productId});
    
    const {cart:{cartItems}}=getState();
    Cookies.set("cartItems", JSON.stringify(cartItems));
   
}

