import {applyMiddleware, combineReducers, compose} from 'redux';
import { legacy_createStore as createStore } from 'redux';
import {thunk} from 'redux-thunk';
//import { createProductReducer, deleteProductReducer, getProductReducer, getProductsReducer, updateProductReducer } from './reducers/productReducer';
//import { createSalesReducer, deleteSalesReducer, getSalesReducer, updateSalesReducer } from './reducers/salesReducer';
//import { deleteOrchardSale } from '../../../Cuetech-Server-main/Controllers/Operations/OrchardSales';
//import { getOrchardExpense, getOrchardExpenses } from '../../../Cuetech-Server-main/Controllers/Operations/OchardExpense';
import { shopOwnerRegisterReducer,shopOwnerLoginReducer } from './reducers/shopownerReducer';
import Cookie from 'js-cookie';
import { getProductReducer,getProductsReducer,updateProductReducer,deleteProductReducer,createProductsReducer } from './reducers/productReducer';
import { getShopsReducer,getShopReducer,updateShopReducer,deleteShopReducer,createShopReducer } from './reducers/shopReducer';
import { getBranchReducer,getBranchesReducer,updateBranchReducer,deleteBranchReducer,createBranchReducer } from './reducers/branchReducer';
import { getStoreKeeperReducer,getStoreKeepersReducer,updateStoreKeeperReducer,deleteStoreKeeperReducer,storeKeeperLoginReducer,storeKeeperRegisterReducer } from './reducers/storeKeeperReducer';
import {cartReducer} from "./reducers/cartReducer";
import { weeklySalesReducer,dailySalesReducer,monthlySalesReducer,cumulativeSalesReducer,yearlySalesReducer } from './reducers/aggregationsReducer';
import { createSaleReducer,getSalesReducer,getStorekeeperSalesReducer } from './reducers/salesReducer';

const storeKeeperInfo = localStorage.getItem('storeKeeperInfo') ? JSON.parse(localStorage.getItem('storeKeeperInfo')): null
const cartItems = Cookie.get('cartItems') ? JSON.parse(Cookie.get("cartItems")):[];
let shopOwnerInfo= localStorage.getItem('shopOwnerInfo') ? JSON.parse(localStorage.getItem('shopOwnerInfo')): null

const initialState={
    shopOwnerSignin:{
      
        shopOwnerInfo
    },
    storeKeeperLogin:{
      
        storeKeeperInfo
    },
    
    cart:{cartItems}


};



 const reducer= combineReducers({
  shopOwnerSignin:shopOwnerLoginReducer,
   shopOwnerRegister:shopOwnerRegisterReducer,
   getProducts:getProductsReducer,
   getProduct:getProductReducer,
   updateProduct:updateProductReducer,
   deleteProduct:deleteProductReducer,
   addProduct:createProductsReducer,
   getShops:getShopsReducer,
   getShop:getShopReducer,
   deleteShop:deleteShopReducer,
   updateShop:updateShopReducer,
   addShop:createShopReducer,
   addBranch:createBranchReducer,
   getBranches:getBranchesReducer,
   getBranch:getBranchReducer,
   updateBranch:updateBranchReducer,
   deleteBranch:deleteBranchReducer,
   getStoreKeepers:getStoreKeepersReducer,
   getStoreKeeper:getStoreKeeperReducer,
   storeKeeperLogin:storeKeeperLoginReducer,
   storeKeeperRegister:storeKeeperRegisterReducer,
   deleteStoreKeeper:deleteStoreKeeperReducer,
   updateStoreKeeper:updateStoreKeeperReducer,
   cart:cartReducer,
addSale:createSaleReducer,
getSales:getSalesReducer,
dailySales:dailySalesReducer,
weeklySales:weeklySalesReducer,
monthlySales:monthlySalesReducer,
yearlySales:yearlySalesReducer,
cumulativeSales:cumulativeSalesReducer,
getStorekeeperSales:getStorekeeperSalesReducer


   
   
});

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
 const store= createStore(reducer,initialState,compose(applyMiddleware(thunk)));


 export default store