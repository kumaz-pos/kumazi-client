import logo from './logo.svg';

import Navbar from './components/shared-components/Navbar';
import ShopOwnerRegister from './components/shop-owners/shop-owner-register';
import ShopOwnerLogin from './components/shop-owners/shop-owner-login';

import AddBranch from './components/shop-owners/add-branch';

import MainLoading from './MainLoading';
import PaymentSuccess from './components/shared-components/payment-success';

import ExpiredSubscriptions from './ExpiredSubscriptions';

import {Routes,Route} from "react-router-dom"
import ShopLayout from './components/shared-components/ShopLayout';
import ShopOverview from './components/shared-components/Shop-overview';
import Stats from './components/shared-components/Stats';
import Products from './components/shared-components/Products';
import Sales from './components/shared-components/Sales';
import AddSale from './components/shared-components/add-sale';
import PaymentMethod from "./components/shared-components/payment-method"
import ProductModal from './components/shared-components/product-modal';
import AddShop from './components/shared-components/add-shop';
import Shops from './components/shared-components/get-shops';
import {Switch} from "react-router-dom"
import UpdateShop from './components/shared-components/update-shop';
import Branches from "./components/shop-owners/get-branches"
import StoreKeepers from './components/shop-owners/store-keepers';
import AddStoreKeeper from './components/shared-components/add-store-keeper';
import UpdateProduct from './components/shop-owners/update-product';
import StoreKeeperLogin from './components/shared-components/store-keeper-login';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Unauthenticated from './components/shared-components/Unauthenticated';
import { Navigate } from 'react-router-dom';
import StoreKeeperSales from "./components/shared-components/StoreKeeperSales"
import { RoleRoute } from './role';



function App() {
  let checkWindow= document.readyState;
  
 
  if (checkWindow!=="complete") {
    console.log("not loaded");
  }
  const userSignin= useSelector((state)=>state.shopOwnerSignin);
  const storeKeeperSignin= useSelector((state)=>state.storeKeeperLogin);

  let shopOwnerInfo= userSignin.shopOwnerInfo;
  let storeKeeperInfo= storeKeeperSignin.storeKeeperInfo;

  
let data= shopOwnerInfo ? shopOwnerInfo : storeKeeperInfo ? storeKeeperInfo: {};
let userData=data

 return   <Routes>
  
  
    
 
 <Route path='/shop-owner-register' element={ <ShopOwnerRegister/>}/>
 <Route path='/shop-owner-login' element={ <ShopOwnerLogin/>}/>
 <Route path='/store-keeper-login' element={ <StoreKeeperLogin/>}/>

 <Route path='/home'  element={<ShopLayout data={data}/>} >
  
    <Route index  element={<Sales userData={userData}/>} />
    <Route path='/home/products'  element={<Products userData={userData}/>} />
   
    <Route path='/home/branch/sale/:id'  element={<Sales userData={userData}/>} /> 
  
    <Route path='/home/add-product'  element={<ProductModal userData={userData}/>} />
    <Route path='/home/update-product/:id'  element={<UpdateProduct userData={userData}/>} />
    <Route path='/home/add-shop' element={<AddShop userData={userData}/>} />
    <Route path='/home/add-branch'  element={<AddBranch userData={userData}/>}  />
    <Route path='/home/shop/sale/:id'  element={<Sales userData={userData}/>} />
    <Route path='/home/shops'  element={<Shops userData={userData}/>} />
    <Route path='/home/store-keepers'  element={<StoreKeepers userData={userData}/>} />
    <Route path='/home/store-keeper/sales/:id'  element={<StoreKeepers userData={userData}/>} />
    <Route path='/home/add-store-keeper'  element={<AddStoreKeeper userData={userData}/>} />
    <Route path='/home/branches'  element={<Branches userData={userData}/>} />
    
    <Route path='/home/shop/store-keeper-sales/:id'  element={<StoreKeeperSales userData={userData}/>} />
    <Route path='/home/add-sale'  element={<AddSale userData={userData}/>} />
    <Route path='/home/payment-method'  element={<PaymentMethod userData={userData}/>} />
    <Route path='/home/payment-success/:total'  element={<PaymentSuccess userData={userData}/>} />
    
   
  </Route>

   

<Route path='*' element={<Unauthenticated to="/" replace/>}/>
  </Routes>

 }
 


export default App;
