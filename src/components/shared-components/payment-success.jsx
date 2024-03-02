import React from 'react'
import { Link,useParams,useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie';
import { baseUrlFrontend } from '../../frontend-url';
function PaymentSuccess() {
const navigate=useNavigate()
const total=useParams().total;
function handleClick() {
Cookies.remove("cartItems")

window.location.replace(`${baseUrlFrontend}/home`)

}
  return (
       <div class="modal-dialog modal-sm modal-dialog-centered mt-4"  role="document">
      <div class="modal-content">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <div class="modal-status bg-success"></div>
        <div class="modal-body text-center py-4">
          
          <svg xmlns="http://www.w3.org/2000/svg" class="icon mb-2 text-green icon-lg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 12l2 2l4 -4" /></svg>
          <h3>Payment succedeed</h3>
          <div class="text-muted">Your payment of {total} has been successfully recorded. </div>
        </div>
        <div class="modal-footer">
          <div class="w-100">
            <div class="row">
              <div class="col"><button onClick={()=>handleClick()} class="btn w-100" >
                  Go to homepage
                </button></div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default PaymentSuccess