import React from 'react'
import { useState } from 'react'
function BranchModal() {
    const [name, setname] = useState("")
    const [userId, setuserId] = useState("")
   


    
  
  return (
  
    <div class="modal modal-blur fade" id="modal-report" tab-index="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">New Branch</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">Branch Name</label>
            <input  value={name} onChange={(e)=>setname(e.target.value)} type="text" class="form-control" name="example-text-input" />
          </div>
       
      
          <div class="row">
          
            <div class="col-lg-4">
              <div class="mb-3">
                <label class="form-label">Allocate Store Keeper</label>
                <select value={userId} onClick={(e)=>setuserId(e.target.value)} class="form-select">
                  <option value="1" selected>Private</option>
                  <option value="2">Public</option>
                  <option value="3">Hidden</option>
                </select>
              </div>
            </div>
          </div>
        </div>
     
        <div class="modal-footer">
          <a href="#" class="btn btn-link link-secondary" data-bs-dismiss="modal">
            Cancel
          </a>
          <a href="#" class="btn btn-primary ms-auto" data-bs-dismiss="modal">
          
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
            Add Product
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BranchModal