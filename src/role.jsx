


import {Routes,Route,redirect} from "react-router-dom"



export function RoleRoute({role,roles=[],...props}) {
    return <>
    {
 !roles.length||roles.includes(role)?(
    <Route {...props}/>
):
<redirect to=".."/>
    }
    
    </>
   
}