import React from 'react'
import LeftSidebar from './LeftSidebar';

export const  EmployeeDashboard = () => {


  return (
    <section class="employee-dashboard d-flex">
        <LeftSidebar />
         <div class="right-panel" id="right-panel">
            <div class="top-strip px-5 py-2">
               <div class="side-strip">
                  <span class="icon-img"> <img src="images/man-icon.png" alt="image" /></span>
                  <p class="pb-0 mb-0 pl-3">Philomina</p>
                  <div id="menu-toggle" onclick="toggleSidebar">  
                     <span>|</span>   
                     <img src="images/menu_leftn.png" />
                  </div>
               </div>
            </div>
            <div class="mid-strip px-5 py-3">
               <h3 class="font-weight-medium">EMPLOYEES</h3>
               <div class="mid-side-strip">
                  <a href="/addnewemployee"  class="btn btn-primary px-4 py-2">+ Add New Employee</a>
               </div>
            </div>
            <div class="form-dashboard px-5 py-3">
               <form>
                  <div class="form-row">
                     <div class="col-md-5 col-6">
                        <input type="text" class="form-control" placeholder="Name" />
                     </div>
                     <div class="col-md-5 col-6">
                        <input type="tel" class="form-control" placeholder="Phone" />
                     </div>
                     <div class="col-md-2 col-12">
                        <input type="submit" class="btn btn-dark w-100 h-100" value="Search" />
                     </div>
                  </div>
               </form>
            </div>
            <div class="dashboard-table px-5 py-3">
               <table class="table">
                  <thead class="thead-light">
                     <tr>
                        <th scope="col">Employee ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td> <a data-toggle="modal" data-target="#exampleModalCenter3">TH-001 </a></td>
                        <td>tim</td>
                        <td>tim@gmail.com</td>
                        <td>13450 - 104 Avenue Surrey, BC V3T 1V8</td>
                        <td>(813) 752-5611</td>
                        <td class="table-side-icon">
                           <a data-toggle="modal" data-target="#exampleModalCenter"><img src="images/Icons.png"  alt="icon" /></a>
                           <a data-toggle="modal" data-target="#exampleModalCenter2"><img src="images/trash-can-alt-2.png"  alt="icon" /></a>
                           <a href=""><img src="images/eye.png"  alt="icon" /></a>
                        </td>
                     </tr>
                     <tr>
                        <td>TH-002</td>
                        <td>elan</td>
                        <td>elansin@gmail.com</td>
                        <td>234 Clyde Rd 	Cambridge, N1R 1L2</td>
                        <td>(813) 732-5535</td>
                        <td class="table-side-icon">
                           <a href=""><img src="images/Icons.png"   alt="icon" /></a>
                           <a href=""><img src="images/trash-can-alt-2.png"  alt="icon" /></a>
                           <a href=""><img src="images/eye.png"  alt="icon" /></a>
                        </td>
                     </tr>
                     <tr>
                        <td>TH-003</td>
                        <td>kanwar</td>
                        <td>kanwar@gmail.com</td>
                        <td>Winnipeg  2426 George Street, K9H 2L1</td>
                        <td>(813) 752-5611</td>
                        <td class="table-side-icon">
                           <a href=""><img src="images/Icons.png"  alt="icon" /></a>
                           <a href=""><img src="images/trash-can-alt-2.png"  alt="icon" /></a>
                           <a href=""><img src="images/eye.png" alt="icon" /></a>
                        </td>
                     </tr>
                     <tr>
                        <td>TH-004</td>
                        <td>Harry</td>
                        <td>Harryporter@outlook.com</td>
                        <td>British Columbia 775 Scotts Lane</td>
                        <td>(213) 322-2221</td>
                        <td class="table-side-icon">
                           <a href=""><img src="images/Icons.png"  alt="icon" /></a>
                           <a href=""><img src="images/trash-can-alt-2.png"  alt="icon" /></a>
                           <a href=""><img src="images/eye.png"  alt="icon" /></a>
                        </td>
                     </tr>
                     <tr>
                        <td>TH-005</td>
                        <td>Jeffy</td>
                        <td>Jeffysinc@look.com</td>
                        <td>2600 Russell Avenue , British Columbia</td>
                        <td>(813) 752-5611</td>
                        <td class="table-side-icon">
                           <a href=""><img src="images/Icons.png"  alt="icon" /></a>
                           <a href=""><img src="images/trash-can-alt-2.png"  alt="icon" /></a>
                           <a href=""><img src="images/eye.png"  alt="icon" /></a>
                        </td>
                     </tr>
                  </tbody>
               </table>
               <nav aria-label="Page navigation example pt-4">
                  <ul class="pagination">
                     <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only">Previous</span>
                        </a>
                     </li>
                     <li class="page-item"><a class="page-link" href="#">1</a></li>
                     <li class="page-item"><a class="page-link" href="#">2</a></li>
                     <li class="page-item"><a class="page-link" href="#">3</a></li>
                     <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span class="sr-only">Next</span>
                        </a>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
      
         <div class="modal fade edit-modal bd-example-modal-lg" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
               <div class="modal-content">
                  <div class="modal-header">        
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true"><i class="fa-solid fa-xmark"></i></span>
                     </button>
                  </div>
                  <div class="modal-body pt-5">
                     <h3>Edit the details of Employee</h3>
                     <form class="py-3">
                        <div class="form-group">
                           <input type="text" class="form-control" id="exampleInputtext"  placeholder="Enter your name" />                      
                        </div>
                        <div class="form-group">
                           <input type="email" class="form-control" id="exampleInputlocation" placeholder="Enter your email" />
                        </div>
                        <div class="form-group">
                           <textarea class="form-control" aria-label="With textarea" placeholder="Enter your Description"></textarea>
                        </div>
                        <div class="form-group savebtn text-center">                       
                           <input type="submit" class="btn btn-primary py-2 my-3" value="Save" />
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         
         <div class="modal fade delete-modal bd-example-modal-lg" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
               <div class="modal-content">
                  <div class="modal-header">        
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true"><i class="fa-solid fa-xmark"></i></span>
                     </button>
                  </div>
                  <div class="modal-body pt-5">
                     <h3 class="text-center">Are you sure you want to delete Em_101 ?</h3>
                     <p>This will delete this Em_101 Permanently. You cannot Undo this action.</p>
                     <div class="modal-deletebtn text-center">
                        <button type="button" class="btn btn-outline-dark" data-dismiss="modal">No</button>
                        <button type="button" class="btn btn-primary ml-2" data-dismiss="modal">Yes</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
         <div class="modal fade location-modal bd-example-modal-lg" id="exampleModalCenter3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
               <div class="modal-content">
                  <div class="modal-header">        
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true"><i class="fa-solid fa-xmark"></i></span>
                     </button>
                  </div>
                  <div class="modal-body pt-5">
                     <h3>Current location of the Employee</h3>
                     <form>
                        <div class="location-panel my-3">
                           <p><b>Sign in location</b></p>
                           <p>First Canadian Place</p>                      
                        </div>
                       <div class="location-panel my-3">
                           <p><b>Job Start Location</b></p>
                           <p>First Canadian Place</p>                      
                        </div>
                        <div class="form-group savebtn text-center">                       
                           <input type="submit" class="btn btn-primary py-2 my-3" value="Save" />
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
  )
}
