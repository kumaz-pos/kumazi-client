import React from 'react'

function StatsComponent({country,dailySales,weeklySales,monthlySales,cumulativeSales,returnValues,yearlySales}) {
  return (
  
    country === "Zambia" ?
      <div class="row row-deck row-cards">


    <div class="col-sm-6 col-lg-3">
  
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="subheader">Sales</div>
           
          </div>
         
          <div class="h1 mb-3">
            
            K{
       returnValues(dailySales)
           }
          </div>
          <div class="d-flex mb-2">
            <div>Sales per day</div>
           
          </div>
         
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-lg-3">
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="subheader">Sales</div>
           
          </div>
          <div class="h1 mb-3">
          K{
           returnValues(weeklySales)
            }
          </div>
          <div class="d-flex mb-2">
            <div>Weekly Sales</div>
           
          </div>
         
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-lg-3">
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="subheader">Sales</div>
           
          </div>
          <div class="h1 mb-3">
          K{
            
          returnValues(weeklySales)
            }
          </div>
          <div class="d-flex mb-2">
            <div>Monthly Sales</div>
           
          </div>
         
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-lg-3">
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="subheader">Sales</div>
           
          </div>
          <div class="h1 mb-3">
          K{
           returnValues(yearlySales)
           }
          </div>
          <div class="d-flex mb-2">
            <div>Yearly Sales</div>
           
          </div>
         
        </div>
      </div>
    </div>
 
 
  

 
 
 

  
    
   
 
  </div> 
   :       <div class="row row-deck row-cards">


   <div class="col-sm-6 col-lg-3">
 
     <div class="card">
       <div class="card-body">
         <div class="d-flex align-items-center">
           <div class="subheader">Sales</div>
          
         </div>
        
         <div class="h1 mb-3">
           
           ZWL{
      returnValues(dailySales)
          }
         </div>
         <div class="d-flex mb-2">
           <div>Sales per day in ZWL</div>
          
         </div>
        
       </div>
     </div>
   </div>
   <div class="col-sm-6 col-lg-3">
 
     <div class="card">
       <div class="card-body">
         <div class="d-flex align-items-center">
           <div class="subheader">Sales</div>
          
         </div>
        
         <div class="h1 mb-3">
           
           ZWL{
      returnValues(dailySales)
          }
         </div>
         <div class="d-flex mb-2">
           <div>Sales per week in ZWL</div>
          
         </div>
        
       </div>
     </div>
   </div>
   <div class="col-sm-6 col-lg-3">
 
     <div class="card">
       <div class="card-body">
         <div class="d-flex align-items-center">
           <div class="subheader">Sales</div>
          
         </div>
        
         <div class="h1 mb-3">
           
           ZWL{
      returnValues(dailySales)
          }
         </div>
         <div class="d-flex mb-2">
           <div>Sales per month in ZWL</div>
          
         </div>
        
       </div>
     </div>
   </div>
   <div class="col-sm-6 col-lg-3">
     <div class="card">
       <div class="card-body">
         <div class="d-flex align-items-center">
           <div class="subheader">Sales</div>
          
         </div>
         <div class="h1 mb-3">
         USD{
          returnValues(weeklySales)
           }
         </div>
         <div class="d-flex mb-2">
           <div>Daily sales in USD</div>
          
         </div>
        
       </div>
     </div>
   </div>
   <div class="col-sm-6 col-lg-3">
     <div class="card">
       <div class="card-body">
         <div class="d-flex align-items-center">
           <div class="subheader">Sales</div>
          
         </div>
         <div class="h1 mb-3">
         USD{
           
         returnValues(weeklySales)
           }
         </div>
         <div class="d-flex mb-2">
           <div>Weekly Sales in USD</div>
          
         </div>
        
       </div>
     </div>
   </div>
   <div class="col-sm-6 col-lg-3">
     <div class="card">
       <div class="card-body">
         <div class="d-flex align-items-center">
           <div class="subheader">Sales</div>
          
         </div>
         <div class="h1 mb-3">
         USD{
          returnValues(yearlySales)
          }
         </div>
         <div class="d-flex mb-2">
           <div>Monthly sales in USD</div>
          
         </div>
        
       </div>
     </div>
   </div>


 





 
   
  

 </div> 
   
  )
}

export default StatsComponent