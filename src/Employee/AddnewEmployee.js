import React from 'react'
import LeftSidebar from './LeftSidebar';

export const  AddnewEmployee = () => {
  return (
    <section class="employee-dashboard d-flex">
    <LeftSidebar />
    <div class="right-panel" id="right-panel">
    <div class="top-strip px-5 py-2">
       <div class="side-strip">
          <span class="icon-img"> <img src="images/man-icon.png"  alt="image" /></span>
          <p class="pb-0 mb-0 pl-3">Philomina</p>
          <div id="menu-toggle" onclick="toggleSidebar">  
             <span>|</span>   
             <img src="images/menu_leftn.png" />
          </div>
       </div>
    </div>
    <div class="addnew-employee h-100">
       <div class="upper-addnew-heading px-5 d-flex pt-3">
          <a href="/addnewemployee"> <i class="fa-solid fa-arrow-left"></i></a>
          <h2>Add New Employee</h2>
       </div>
       <div class="addemployee-form form-login-panel pt-4">
          <form>
             <div class="form-row pt-4">
                <div class="form-group col-md-5 px-3">
                   <label for="exampleInputEmail1">Name</label>
                   <input type="text" class="form-control" id="exampleInputtext"  placeholder="Enter your name" />                      
                </div>
                <div class="form-group col-md-5 px-3">
                   <label for="exampleInputlocation">Location</label>
                   <input type="text" class="form-control" id="exampleInputlocation" placeholder="Enter your Location" />
                </div>
                <div class="form-group col-md-5 px-3">
                   <label for="exampleFormControlSelect1">Description</label>
                   <textarea class="form-control" aria-label="With textarea" placeholder="Enter your Description"></textarea>
                </div>
                <div class="form-group col-md-5 px-3">
                   <label for="exampleFormControlSelect1">Special Note</label>
                   <textarea class="form-control" aria-label="With textarea" placeholder="Enter your Special Note"></textarea>
                </div>
                <div class="form-group col-md-5 px-3">
                   <label for="exampleInputEmail1">Start Date</label>
                   <input type="date" class="form-control datepicker" id="exampleInputtext"  placeholder="Enter your Start Date" />                      
                </div>
                <div class="form-group col-md-5 px-3">
                   <label for="exampleInputlocation">Start Time</label>
                   <input type="time" class="form-control" id="exampleInputlocation" placeholder="Enter your Start Time" />
                </div>
                <div class="form-group  col-md-5 px-3">
                   <label for="exampleFormControlSelect1">Assign To</label>
                   <select class="form-control" id="exampleFormControlSelect1">
                      <option>Melissa Teasdale</option>
                      <option>Melissa Teasdale</option>
                   </select>
                </div>
                <div class="form-group col-md-5 px-3">
                   <label for="exampleInputEmail1">Job Days</label>
                   <input type="Days" class="form-control" id="exampleInputtext"  placeholder="Enter your Day" />                      
                </div>
                <div class="form-group submitbtn col-md-12">                       
                   <input type="submit" class="btn btn-primary py-2 my-3" value="Submit" />
                </div>
             </div>
          </form>
       </div>
    </div>
 </div>
 </section>
  )
}
