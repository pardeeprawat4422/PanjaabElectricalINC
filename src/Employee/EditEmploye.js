import React from 'react'
import LeftSidebar from './LeftSidebar';
export const  EditEmploye = () => {
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
          <a href="/employeelist"> <i class="fa-solid fa-arrow-left"></i></a>
          <h2>Edit the details of Employee</h2>
       </div>
       <div class="addemployee-form form-login-panel pt-4">
          <form>
             <div class="form-row pt-4">
                <div class="form-group col-md-5 px-3">
                   <label for="exampleInputEmail1">Name</label>
                   <input type="text" class="form-control" id="exampleInputtext"  placeholder="Jeffy" />                      
                </div>
                <div class="form-group col-md-5 px-3">
                   <label for="exampleInputlocation">Email</label>
                   <input type="text" class="form-control" id="exampleInputEmail" placeholder="Jeffysinc@look.com" />
                </div>
                <div class="form-group col-md-5 px-3">
                   <label for="exampleFormControlSelect1">Phone</label>
                   <input type="text" class="form-control" id="exampleInputPhone" placeholder="+1-813-r752-5611" />
                </div>
                <div class="form-group col-md-5 px-3">
                   <label for="exampleFormControlSelect1">Address</label>
                   <textarea class="form-control" aria-label="With textarea" placeholder="2600 Russell Avenue , British Columbia"></textarea>
                </div> 
                <div class="form-group submitbtn col-md-12">                       
                   <input type="submit" class="btn btn-primary py-2 my-3" value="Update" />
                </div>
             </div>
          </form>
       </div>
    </div>
 </div>
 </section>
  )
}
