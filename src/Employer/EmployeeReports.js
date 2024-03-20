import React, { useState, useEffect } from 'react';
import LeftSidebar from './LeftSidebar';
import api from '../api';
export const  EmployeeReports = () => {
   const [reportData, setReportData] = useState([]);
   useEffect(() => {
      const fetchReportData = async () => {
         try {
            // Fetch data from your API endpoint
            const response = await api.get(`/reports`);
            // Set the fetched data to state
            console.log(reportData);
            setReportData(response.data.data);
         } catch (error) {
            // Handle errors
            console.error('Error fetching data:', error);
         }
      };

      // Call fetchReportData function
      fetchReportData();

   }, []); // Empty dependency array to run effect only once

  return (
    <section class="employee-dashboard d-flex">
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
    <div class="addnew-employee h-100">
    <div class="upper-addnew-heading px-5 d-flex pt-3">
       <h2>REPORTS</h2>
    </div>
    <div class="reports-form form-login-panel pt-1 px-5">
       <form>
          <div class="form-row">
             <div class="form-group">
                <label for="datepicker">From</label>
                <input type="date" class="form-control datepicker"  placeholder="Start"/>                      
             </div>
             <div class="form-group ">
                <label for="exampleInputmonth">To</label>
                <input type="date" class="form-control" id="exampleInputmonth" placeholder="End" />
             </div>
             <div class="form-group ">
                <label for="exampleFormControlSelect1">of</label>
             </div>
             <div class="form-group">
                <select class="form-control" id="exampleFormControlSelect1">
                   <option>All</option>
                   <option>All 1</option>
                   <option>All 2</option>
                </select>
                <label for="exampleFormControlSelect1">Employee For</label>
             </div>
             <div class="form-group">
                <select class="form-control" id="exampleFormControlSelect1">
                   <option>All</option>
                   <option>All 1</option>
                   <option>All 2</option>
                </select>
                <label for="exampleFormControlSelect1">Job</label>
             </div>
             <div class="form-group search-reports">                       
                <input type="submit" class="btn btn-dark px-4 ml-1" value="Search" />
             </div>
          </div>
       </form>
    </div>
    <div class="reports-table px-5 py-5">
      
       <table class="table text-center">
          <thead class="thead-light">
             <tr>
                <th scope="col">Employee Name</th>
                <th scope="col">Number of Hours</th>
                <th scope="col">Date Range</th>
             </tr>
          </thead>
          <tbody>
  {reportData.map((report, index) => (
    <tr key={index}>
      <td>{report.Emp_Name}</td>
      <td>{report.total_hours_worked}</td>
      <td>{report.first_clockin} - {report.last_clockout}</td>
    </tr>
  ))}
</tbody>
       </table>
    </div>
    <nav aria-label="Page navigation example pt-4">
       <ul class="pagination  px-5">
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
