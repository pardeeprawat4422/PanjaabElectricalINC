import React from 'react'
import LeftSidebar from './LeftSidebar';

export const  Currentlocation = () => {
  return (
    <section class="employee-dashboard d-flex">
    <LeftSidebar />
    <div class="right-panel" id="right-panel">
            <div class="top-strip px-5 py-2">
               <div class="side-strip">
                  <span class="icon-img"> <img src="images/man-icon.png" alt="image"/></span>
                  <p class="pb-0 mb-0 pl-3">Philomina</p>
                  <div id="menu-toggle" onclick="toggleSidebar">  
                     <span >|</span>   
                     <img src="images/menu_leftn.png"/>
                  </div>
               </div>
            </div>
            <div class="mid-strip current-location-heading px-5 py-3">
               <h3 class="font-weight-medium">CURRENT LOCATION OF THE EMPLOYEE </h3>
            </div>
			<div class="current-location px-4">
			<form>
                        <div class="location-panel my-3">
                           <p><b>Sign in location</b></p>
                           <p>First Canadian Place</p>                      
                        </div>
                       <div class="location-panel my-3">
                           <p><b>Job Start Location</b></p>
                           <p>First Canadian Place</p>                      
                        </div>
                        
                     </form>
			</div>
            
         </div>
    </section>
  )
}


