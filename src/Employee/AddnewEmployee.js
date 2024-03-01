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
                   <input type="text" class="form-control" id="exampleInputtext"  placeholder=" Name" />                      
                </div>
                <div class="form-group col-md-5 px-3">
                   <label for="exampleInputlocation">Email</label>
                   <input type="text" class="form-control" id="exampleInputlocation" placeholder="Email" />
                </div>
                <div class="form-group col-md-5 px-3">
                   <label for="exampleFormControlSelect1">Phone</label>
                   <textarea class="form-control" aria-label="With textarea" placeholder="Phone"></textarea>
                </div>
                <div class="form-group col-md-5 px-3">
                   <label for="exampleFormControlSelect1">Address</label>
                   <textarea class="form-control" aria-label="With textarea" placeholder="Address"></textarea>
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
