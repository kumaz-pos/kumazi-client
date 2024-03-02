import React from 'react'

function AddShop() {
  return (      <div class=" d-flex flex-column">
  <div class="page page-center">
    <div class="container container-tight py-4">
      <div class="text-center mb-4">
        <a href="." class="navbar-brand navbar-brand-autodark"><img src="./static/logo.svg" height="36" alt=""/></a>
      </div>
      <form class="card card-md" action="./" method="get" autocomplete="off" novalidate>
        <div class="card-body">
          <h2 class="card-title text-center mb-4">Welcome to Kumazi POS,Please add your shop name</h2>
         
          <div class="mb-3">
            <label class="form-label">
             Shop name
            </label>
            <input type="text" class="form-control" placeholder="Enter Phone Number"/>
          </div>
       
       
          <div class="form-footer">
            <button type="submit" class="btn btn-primary w-100">
                Register shop name
            </button>
          </div>
        </div>
      </form>
  
    </div>
  </div>
  </div>
  )
}

export default AddShop