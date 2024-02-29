import React from 'react'
import LeftSidebar from './LeftSidebar';

export const  EmployeeJobs = () => {
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
    <div class="mid-strip px-5 py-3">
       <h3 class="font-weight-medium">JOBS</h3>
       <div class="mid-side-strip">
          <a href="/addnewemployee"  class="btn btn-primary px-4">+ Add New Job  </a>
       </div>
    </div>
    <div class="form-dashboard  form-jobs px-5 py-3">
       <form>
          <div class="form-row">
             <div class="form-group  col-sm-5 px-3 mb-0">
                <label for="exampleFormControlSelect1">STATUS</label>
                <select class="form-control ml-4" id="exampleFormControlSelect1">
                   <option>All</option>
                   <option>Completed</option>
                   <option>In-progress</option>
                </select>
             </div>
             <div class="col-sm-2 col-12">
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
                <th scope="col">Job Location</th>
                <th scope="col">Description</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Employee</th>
                <th scope="col">Edit</th>
             </tr>
          </thead>
          <tbody>
             <tr>
                <td>Electrical Engineer</td>
                <td> Ontario</td>
                <td>House Plugs</td>
                <td>3 march 2024</td>
                <td>Start</td>
                <td>Jeffy</td>
                <td class="table-side-icon">
                   <a data-toggle="modal" data-target="#exampleModalCenter"><img src="images/Icons.png"  alt="icon" /></a>                
                </td>
             </tr>
             <tr>
                <td>plumber</td>
                <td>Edmonton</td>
                <td>Install, repair, and maintain pipes</td>
                <td>14 feb 2024</td>
                <td>Progress</td>
                <td>kanwar</td>
                <td class="table-side-icon">
                   <a data-toggle="modal" data-target="#exampleModalCenter"><img src="images/Icons.png" alt="icon" /></a>                
                </td>
             </tr>
             <tr>
                <td>Power Engineer</td>
                <td>Toronto</td>
                <td>repair</td>
                <td>18 feb 2024</td>
                <td>Complete</td>
                <td>tim</td>
                <td class="table-side-icon">
                   <a data-toggle="modal" data-target="#exampleModalCenter"><img src="images/Icons.png"  alt="icon" /></a>                
                </td>
             </tr>
             <tr>
                <td>Technician</td>
                <td>British Columbia</td>
                <td>Lab Technicians, Dental Technicians</td>
                <td>12 jan 2024</td>
                <td>Complete</td>
                <td>elan</td>
                <td class="table-side-icon">
                   <a data-toggle="modal" data-target="#exampleModalCenter"><img src="images/Icons.png"  alt="icon" /></a>                
                </td>
             </tr>
             <tr>
                <td>Electrical Engineer</td>
                <td>Montreal</td>
                <td>can use whatever CMS you like, including WordPress</td>
                <td>1 March 2024</td>
                <td>Start</td>
                <td>Harry</td>
                <td class="table-side-icon">
                   <a data-toggle="modal" data-target="#exampleModalCenter"><img src="images/Icons.png"  alt="icon" /></a>                
                </td>
             </tr>
             <tr>
                <td>Power Engineer</td>
                <td>Chetwynd</td>
                <td>repair</td>
                <td>28 Feb 2024</td>
                <td>Progress</td>
                <td>Sinc</td>
                <td class="table-side-icon">
                   <a data-toggle="modal" data-target="#exampleModalCenter"><img src="images/Icons.png"  alt="icon" /></a>                
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
</section>
  )
}
