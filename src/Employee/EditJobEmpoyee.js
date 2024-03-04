import React from 'react'
import LeftSidebar from './LeftSidebar';

export const  EditJobEmpoyee = () => {
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
          <a href="/employeejobs"> <i class="fa-solid fa-arrow-left"></i></a>
          <h2>Edit Job</h2>
       </div>
       <div class="addemployee-form form-login-panel pt-4">
          <form>
             <div class="form-row pt-4">
                <div class="form-group col-md-5 px-3">
                   <label for="exampleInputEmail1">Name</label>
                   <input type="text" class="form-control" id="exampleInputtext"  placeholder="Electrical Engineer" />                      
                </div>
                <div class="form-group col-md-5 px-3">
                   <label for="exampleInputlocation">Location</label>
                   <input type="text" class="form-control" id="exampleInputlocation" placeholder="Ontario" />
                </div>
                <div class="form-group col-md-5 px-3">
                   <label for="exampleFormControlSelect1">Description</label>
                   <textarea class="form-control" aria-label="With textarea" placeholder="House Plugs"></textarea>
                </div>
                <div class="form-group col-md-5 px-3">
                   <label for="exampleFormControlSelect1">Special Note</label>
                   <textarea class="form-control" aria-label="With textarea" placeholder="45 BC, making it over 2000 years old.	Special Note"></textarea>
                </div>
                <div class="form-group col-md-5 px-3">
                   <label for="exampleInputEmail1">Start Date</label>
                   <input type="date" class="form-control datepicker" id="exampleInputDate" value="2024-03-04" />  
                </div>
                <div class="form-group col-md-5 px-3">
                   <label for="exampleInputlocation">Start Time</label>
                   <input type="time" class="form-control" id="exampleInputlocation"  value="09:00" />
                </div>
                <div class="form-group col-md-5 px-3">
                           <label for="exampleInputEmail1">Job Days</label>
                           <input type="Days" class="form-control" id="exampleInputtext"  placeholder="2"/>                      
                        </div>
                        <div class="form-group  col-md-5 px-3">
                        </div>
                        <div class="col-md-5  px-3">
                           <label for="exampleFormControlSelect1">Assign To</label>
                        </div>
                         <div class="form-group  col-md-5">
                        </div>
                        <div class="inner-selectbox px-5 pb-2 w-100">
                           <div class="row">
                              <div class="col-md-3 col-6">
                                 <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"  checked  />
                                       <label class="form-check-label" for="defaultCheck1">
                                             Claire
                                       </label>
                                 </div>
                              </div>
                              <div class="col-md-3 col-6">
                                 <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                       <label class="form-check-label" for="defaultCheck1">
                                          Jessica
                                       </label>
                                 </div>
                              </div>
                              <div class="col-md-3 col-6">
                                 <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                       <label class="form-check-label" for="defaultCheck1">
                                          Edward
                                       </label>
                                 </div>
                              </div>
                              <div class="col-md-3 col-6">
                                 <div class="form-check">
                                       <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                       <label class="form-check-label" for="defaultCheck1">
                                             Nathan
                                       </label>
                                 </div>
                              </div>
                           </div>
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
