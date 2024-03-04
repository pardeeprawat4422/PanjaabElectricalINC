import React from 'react'
import LeftSidebar from './LeftSidebar';

export const  Emplyoyeejoblist = () => {
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
                    <th scope="col">Job Name</th>
                    <th scope="col">Location</th>
                    <th scope="col">Description</th>
                    <th scope="col">Status</th>
                    <th scope="col">Date</th>
                    <th scope="col">Start Location</th>
                    <th scope="col">Start Time</th>
                 </tr>
              </thead>
              <tbody>
                 <tr>
                     <td>Electric</td>
                    <td>13450 - 104 Avenue Surrey, BC V3T 1V8</td>
                    <td>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</td>
                    <td>Completed</td>
                    <td>1 Jan</td>
                    <td>Surrey</td>
                    <td>9:00 AM</td>
                 </tr>
                 <tr>
                     <td>Switch Change</td>
                    <td>2483 Toy Avenue</td>
                    <td>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</td>
                    <td>Completed</td>
                    <td>5 Jan</td>
                    <td>Oshawa</td>
                    <td>9:00 AM</td>
                 </tr>
                 <tr>
                    <td>Power Engineer</td>
                    <td>391 40th Street</td>
                    <td>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</td>
                    <td>Completed</td>
                    <td>30 Jan</td>
                    <td>Alberta</td>
                    <td>9:00 AM</td>
                 </tr>
                 <tr>
                    <td>Technician</td>
                    <td>285 St Jean Baptiste St</td>
                    <td>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</td>
                    <td>In-Progress</td>
                    <td>9 Feb Jan</td>
                    <td>Quebec</td>
                    <td>9:00 AM</td>
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
  </section>
  )
}
