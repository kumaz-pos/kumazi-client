import React from 'react'
import { useState } from 'react'
import { BiCart } from 'react-icons/bi';
import { BiX } from 'react-icons/bi';
import { useDispatch,useSelector } from 'react-redux';
function AddButton({addItems,dispatch,productId,addToCart,removeFromCart}) {
  let cartItems=useSelector((state)=>state.cart);
 let singleItem=cartItems.cartItems.find((item)=>item.productId===productId);


    const [addState, setAddState] = useState(false);
    const [quantity, setquantity] = useState(0);
    const [done, setdone] = useState(true)
    let qty=quantity;
function addItem() {
    addItems()
    setAddState(!addState)
}
function addItemToCart() {
    dispatch(addToCart(productId,qty))
}
function removeItemFromCart() {
    dispatch(removeFromCart(productId))
    setdone(!done)
}
  return (
    <div>
        {
            addState?  <button onClick={addItem} class="btn btn-dribbble  btn-icon" aria-label="Dribbble">
        
            <BiCart size={20} />
             </button> : 
             <div className='display-flex' style={{
                display:"flex",
                alignContent:"center",
                justifyContent:"right",
                gap:"0.5rem"

             }}> 


{
  done ? <>
     <input   type="number" class="form-control w-50" placeholder="quantity" onChange={(e)=>setquantity(e.target.value)}/>
      <button onClick={
      ()=>{
        addItemToCart()
        setdone(!done)
      }
        } class="btn btn-success w-25 btn-icon mb-2" aria-label="Dribbble">
              
              Done
               </button> 
   
  </> : <div style={{display:"flex",alignContent:"center",gap:"0.5rem"}}>
  <h3> {
singleItem &&    singleItem.total
    } <span> </span>
    <BiX  onClick={()=>removeItemFromCart()} style={{color:"red",cursor:"pointer"}} size={20}/>
  </h3>
  </div>
   
}

             
             </div>

  

           
          
        }
         
    </div>
  )
}

export default AddButton