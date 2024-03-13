import React from 'react'
import LeftSidebar from './LeftSidebar';

export const Notification = () => {
  return (
    <section className="employee-dashboard d-flex">
      <LeftSidebar />
      <div class="right-panel" id="right-panel">
            <div class="top-strip px-5 py-2">
               <div class="side-strip">
                  <span class="icon-img"> <img src="images/man-icon.png"    
                   alt="image" /></span>
                  <p class="pb-0 mb-0 pl-3">Philomina</p>
                  <div id="menu-toggle" onclick="toggleSidebar">  
                  <span >|</span>   
                  <img src="images/menu_leftn.png" />
                  </div>
            </div>
     </div>
     <div class="container mt-5">
        <div class="row">
        <div class="col-md-12">
            <div class="col-md-12">
            <div class="alert alert-success" role="alert">
                    Elly Started the Job.
             </div>
             <div class="alert alert-warning" role="alert">
                   Jony On Progress.
             </div>
             <div class="alert alert-danger" role="alert">
                     Kanwar Complete the job.
             </div>
            </div>
            </div>
        </div>
     </div>
     </div>
    </section>
      
  )
}


export default Notification;
