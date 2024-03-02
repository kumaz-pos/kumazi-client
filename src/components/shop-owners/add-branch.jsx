import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { createbranch } from '../../redux/actions/branch-actions';
import { getstorekeepers } from '../../redux/actions/storekeeper-actions';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import AuthLoader from '../shared-components/Auth-Loader'
function AddBranch() {

  const navigate= useNavigate();
    const [branchName, setBranchName] = useState("")
 
    const branches= useSelector((state)=>state.addBranch);
    const storeKeepers= useSelector((state)=>state.getStoreKeepers);
    const [storeKeeper, setstoreKeeper] = useState("");
 
    let {loading,success,data}=branches;


    let cookie= JSON.parse(Cookies.get("shopOwnerInfo"));
    let token=cookie.token

const dispatch= useDispatch();
    function addBranch(e) {
      e.preventDefault();
      dispatch(createbranch(branchName,storeKeeper,token))
     

    }
  

useEffect(() => {
  if (success) {
    alert("You have succesfully added a new branch now you are being directed to the home page")
  
   
  
   
   
    navigate("/home") 

   
  }
  dispatch(getstorekeepers(token))
}, [success])

  
  return (
    <div class="page-body">
          <div class="container-xl">

          <form class="card" onSubmit={addBranch}>
            {
              loading ? <AuthLoader/> : null
            }
                <div class="card-header">
                  <h3 class="card-title">Add Branch</h3>
                </div>
                <div class="card-body">
                  <div class="mb-3 col">
                    <label class="col-3 col-form-label required">Branch Name</label>
                    <div class="col">
                      <input type="text" onChange={(e)=>setBranchName(e.target.value)} class="form-control" aria-describedby="emailHelp" placeholder="Enter branch name"/>
                    
                    </div>
                  </div>
                  {
                    storeKeepers.loading ?    <label class="form-label">Loading</label> :  <div class="mb-3"> 
                 
                    <label class="form-label">Allocate Store Keeper</label>
                    <select onChange={(e)=>setstoreKeeper(e.target.value)} class="form-select">
                      {
                         storeKeepers.data ?
                         storeKeepers.data.map((item)=>{
return <option value={item._id} >
{item.name}
</option>

                        }) : null
                      }
                     
                    </select>
                  </div>
                  }
                 
               
                
                </div>
                <div class="card-footer text-end">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
          </div>
      
    </div>
        
  
  
   
  )
}

export default AddBranch