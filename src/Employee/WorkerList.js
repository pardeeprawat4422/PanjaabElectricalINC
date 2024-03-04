import React from 'react'
import LeftSidebar from './LeftSidebar';

export const  WorkerList = () => {
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
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                    <th scope="col">Status</th>
                    <th scope="col">Start Location</th>
                    <th scope="col">Start Time</th>
                 </tr>
              </thead>
              <tbody>
                 <tr>
                    <td>Jelly</td>
                    <td>Jelly@gmail.com</td>
                    <td>+1-233-666-0172</td>
                    <td>Quebec</td>
                    <td>Completed</td>
                    <td>Quebec</td>
                    <td>9:00 AM</td>
                 </tr>
                 <tr>
                    <td>Drake</td>
                    <td>Drake@gmail.com</td>
                    <td>+1-852-999-0062</td>
                    <td>Calgary</td>
                    <td>Completed</td>
                    <td>Calgary</td>
                    <td>16:00 PM</td>
                 </tr>
                 <tr>
                   <td>Kanwar</td>
                   <td>Kanwar@gmail.com</td>
                   <td>+1-233-666-0172</td>
                    <td>Winnipeg</td>
                    <td>Completed</td>
                    <td>Winnipeg</td>
                    <td>2:00 PM</td>
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
