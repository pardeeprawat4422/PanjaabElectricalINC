import React from 'react'
import LeftSidebar from './LeftSidebar';  

export const LiveStatus = () => {
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
             <img src="images/menu_leftn.png" alt="image"/>
          </div>
       </div>
    </div>
    <div class="mid-strip px-5 py-3">
       <h3 class="font-weight-medium">Please Select employee(s) to see the live location </h3>
    </div>
    <div class="inner-selectbox px-3 py-2">
       <div class="row">
       <div class="col-md-3 col-6">
          <div class="form-check">
             <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
             <label class="form-check-label" for="defaultCheck1">
             Claire
             </label>
          </div>
       </div>
       <div class="col-md-3 col-6">
          <div class="form-check">
             <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
             <label class="form-check-label" for="defaultCheck1">
             Jessica
             </label>
          </div>
       </div>
       <div class="col-md-3 col-6">
          <div class="form-check">
             <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
             <label class="form-check-label" for="defaultCheck1">
             Edward
             </label>
          </div>
       </div>
       <div class="col-md-3 col-6">
          <div class="form-check">
             <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
             <label class="form-check-label" for="defaultCheck1">
             Nathan
             </label>
          </div>
       </div>
    </div>
    <div class="livelocation-btn px-5 py-4 d-flex">
       <div class="selectbox-btn mr-4 my-3">
          <a href="#" class="btn btn-primary px-4 py-2">Select All</a>
       </div>
       <div class="selectbox-btn mr-4 my-3">
          <a href="/Currentlocation" class="btn btn-primary px-4 py-2">Show Live Sign In</a>
       </div>
       <div class="selectbox-btn mr-4 my-3">
          <a href="/Currentlocation" class="btn btn-primary px-4 py-2">Show Job Live Location </a>
       </div>
    </div>
 </div>
 </div>
 </section>
  )
}

export default LiveStatus;
