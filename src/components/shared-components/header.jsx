import React from 'react'

function Header({titleFeint,titleBold}) {
  return (
    <div className='page-wrapper'>
      <div class="page-header d-print-none">
          <div class="container-xl">
            <div class="row g-2 align-items-center">
              <div class="col">
               
                <div class="page-pretitle">
                  {titleFeint}
                </div>
                <h2 class="page-title">
                 {titleBold} 
                </h2> 
              </div>
             
             
            </div>
          </div>
        </div>
     
    </div>
   
  )
}

export default Header