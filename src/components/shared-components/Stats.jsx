import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect,useState } from 'react';
import {getcumulativesales,getdailysales,getmonthlysales,getweeklysales,getyearlysales} from "../../redux/actions/aggregations-actions"
import StatsComponent from './stats-component';
function Stats({data}) {
  const dispatch=useDispatch();
 const dailySales= useSelector((state)=>state.dailySales)
 const weeklySales= useSelector((state)=>state.weeklySales)
 const monthlySales= useSelector((state)=>state.monthlySales)
 const yearlySales= useSelector((state)=>state.yearlySales)
 const cumulativeSales= useSelector((state)=>state.cumulativeSales);
 const userSignin= useSelector((state)=>state.shopOwnerSignin);
 const storeKeeperSignin= useSelector((state)=>state.storeKeeperSignin);

 let shopOwnerInfo= userSignin.shopOwnerInfo;
 let storeKeeperInfo= userSignin.storeKeeperInfo;
let id= data._id;
let country= data.country;


 ///let token= shopOwnerInfo.token
function returnValues(value) {

  return   value.loading === true ?    "loading...." :  value.error         ?  "error" : 
  value.data ?   value.data.reduce((item,{totalPrice})=>item+totalPrice,0) : null

  

  
 
}


 useEffect(() => {
   dispatch(getcumulativesales())
   dispatch(getdailysales())
   dispatch(getmonthlysales())
   dispatch(getyearlysales(id))
   dispatch(getcumulativesales())
   dispatch(getweeklysales())
  

 }, [getcumulativesales,getdailysales,getmonthlysales,getyearlysales,getweeklysales,getweeklysales])

  return ( 
    
    <div className='page-wrapper'>
 
      <div class="page-body">
        <div class="container-xl">
        
                  <StatsComponent dailySales={dailySales} weeklySales={weeklySales} monthlySales={monthlySales} cumulativeSales={cumulativeSales} yearlySales={yearlySales} returnValues={returnValues}  country={country}/>
         
        </div>
      </div>
  </div>
  
  )
}

export default Stats