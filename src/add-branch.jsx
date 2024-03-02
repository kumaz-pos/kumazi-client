import React from 'react'

function AddBranch() {
  return (
    <div class=" d-flex flex-column">
    <div class="page page-center">
      <div class="container container-tight py-4">
        <div class="text-center mb-4">
          <a href="." class="navbar-brand navbar-brand-autodark"><img src="./static/logo.svg" height="36" alt=""/></a>
        </div>
        <form class="card card-md" action="./" method="get" autocomplete="off" novalidate>
          <div class="card-body">
            <h2 class="card-title text-center mb-4">Add Branch</h2>
           
            <div class="mb-3">
              <label class="form-label">
               Branch Name
              </label>
              <input type="text" class="form-control" placeholder="Enter Phone Number"/>
            </div>
         

            <div class="row">
          
         
            <div class="mb-3">
              <label class="form-label">Allocate Store Keeper</label>
              <select class="form-select">
                <option value="1" selected>Private</option>
                <option value="2">Public</option>
                <option value="3">Hidden</option>
              </select>
            </div>
       




        </div>
         
            <div class="form-footer">
              <button type="submit" class="btn btn-primary w-100">
                  Register branch
              </button>
            </div>
          </div>
        </form>
    
      </div>
    </div>
    </div>
  )
}

export default AddBranch