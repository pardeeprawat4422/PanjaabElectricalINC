import React from 'react'


const  EmployerReports = () => {
  return (
    <section class="main-panel">
    <div class="nav-menu">
       <div class="left-navlogo">
          <a href="/employerreports"><img src="images/punjab-electrical-inc-01.png" alt="logo" /></a>
       </div>
       <div class="right-navsection">
          <div class="navside-strip">
             <span class="icon-img"> <img src="images/man-icon.png"  alt="image" /></span>
             <p class="pb-0 mb-0 pl-3">Philomina</p>
          </div>
          <div class="mid-side-strip px-3">
            <a href="/" class="btn btn-primary px-4 py-2">LOGOUT</a>
            </div>
       </div>
    </div>
    <div class="reports-output">
            <div class="reports-output-content">
               <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item">
                     <a class="nav-link active btn btn-outline-dark" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Latest Assigned Jobs</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link btn btn-outline-dark ml-2" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Jobs In-Progress</a>
                  </li>
               </ul>
               <div class="tab-content" id="pills-tabContent">
                  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                     <table class="table">
                        <thead class="thead-light">
                           <tr>
                              <th scope="col">Job Name</th>
                              <th scope="col">Location</th>
                              <th scope="col">Description</th>
                              <th scope="col">Note</th>
                              <th scope="col">Date-Time</th>
                              <th scope="col">Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td> Electrical Engineer</td>
                              <td>brampton</td>
                              <td>XYZ</td>
                              <td>XYZ</td>
                              <td>XYZ</td>
                              <td>Start</td>
                           </tr>
                           <tr>
                              <td> Electrical</td>
                              <td>vancouver</td>
                              <td>XYZ</td>
                              <td>XYZ</td>
                              <td>XYZ</td>
                              <td>Start</td>
                           </tr>
                           <tr>
                              <td> Electrical</td>
                              <td>brampton</td>
                              <td>XYZ</td>
                              <td>XYZ</td>
                              <td>XYZ</td>
                              <td>Start</td>
                           </tr>
                           <tr>
                              <td> Electrical</td>
                              <td>brampton</td>
                              <td>XYZ</td>
                              <td>XYZ</td>
                              <td>XYZ</td>
                              <td>Start</td>
                           </tr>
                           <tr>
                              <td> Electrical</td>
                              <td>surrey </td>
                              <td>XYZ</td>
                              <td>XYZ</td>
                              <td>XYZ</td>
                              <td>Start</td>
                           </tr>
                           <tr>
                              <td> Electrical</td>
                              <td>brampton</td>
                              <td>XYZ</td>
                              <td>XYZ</td>
                              <td>XYZ</td>
                              <td>Start</td>
                           </tr>
                           <tr>
                              <td> Electrical</td>
                              <td>surrey </td>
                              <td>XYZ</td>
                              <td>XYZ</td>
                              <td>XYZ</td>
                              <td>Start</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                     <table class="table">
                        <thead class="thead-light">
                           <tr>
                              <th scope="col">Job Name</th>
                              <th scope="col">Location</th>
                              <th scope="col">Description</th>
                              <th scope="col">Note</th>
                              <th scope="col">Date-Time</th>
                              <th scope="col">Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td> Electrical Engineer</td>
                              <td>surrey </td>
                              <td>XYZ</td>
                              <td>XYZ</td>
                              <td>XYZ</td>
                              <td>Progress</td>
                           </tr>
                           <tr>
                              <td> Electrical</td>
                              <td>malta </td>
                              <td>XYZ</td>
                              <td>XYZ</td>
                              <td>XYZ</td>
                              <td>Progress</td>
                           </tr>
                           <tr>
                              <td> Electrical</td>
                              <td>brampton</td>
                              <td>XYZ</td>
                              <td>XYZ</td>
                              <td>XYZ</td>
                              <td>Progress</td>
                           </tr>
                           <tr>
                              <td> Electrical</td>
                              <td>malta </td>
                              <td>XYZ</td>
                              <td>XYZ</td>
                              <td>XYZ</td>
                              <td>Progress</td>
                           </tr>
                           <tr>
                              <td> Electrical</td>
                              <td>surrey </td>
                              <td>XYZ</td>
                              <td>XYZ</td>
                              <td>XYZ</td>
                              <td>Progress</td>
                           </tr>
                           <tr>
                              <td> Electrical</td>
                              <td>vancouver</td>
                              <td>XYZ</td>
                              <td>XYZ</td>
                              <td>XYZ</td>
                              <td>Progress</td>
                           </tr>
                           <tr>
                              <td> Electrical</td>
                              <td>brampton</td>
                              <td>XYZ</td>
                              <td>XYZ</td>
                              <td>XYZ</td>
                              <td>Progress</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
         </section>
  )
}
export default EmployerReports;