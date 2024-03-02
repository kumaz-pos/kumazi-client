import React from 'react'
import { Link } from 'react-router-dom'
function Unauthenticated() {
  return (
    <div class="card">
   
    <div class="card-body" style={{display:"grid","justifyContent":"center"}}>
      <h3 class="card-title" style={{display:"grid","justifyContent":"center"}}>You are unauthenticated</h3>
      <p class="text-muted" style={{display:"grid","justifyContent":"center"}}>
      Please choose the route you want to go
        </p>
        <div class="card-footer" style={{display:"grid",gap:"0.5rem"}}>
    <Link to="/shop-owner-login" class="btn btn-primary">Login as a Shop Owner</Link>
    
    <Link to="/store-keeper-login" class="btn btn-dark">
        Login as a Store Keeper
      </Link>
  </div>
    </div>
  </div>
  )
}

export default Unauthenticated