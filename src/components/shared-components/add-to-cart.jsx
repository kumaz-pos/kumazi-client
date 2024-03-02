import React from 'react'
import { BiCart } from 'react-icons/bi'
function Button({current,id,onClick}) {
  return (
<p>
    {
        current&&current!==id ? <input  type="text" class="form-control w-25" placeholder="City" value="1"/>:
        <button onClick={onClick} class="btn btn-dribbble  btn-icon" aria-label="Dribbble">
        
        <BiCart size={20} />
         </button>
   }

</p>
  
  )
}

export default Button