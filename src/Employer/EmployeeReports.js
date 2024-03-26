import React, { useState, useEffect } from 'react';
import LeftSidebar from './LeftSidebar';
import api from '../api';

export const EmployeeReports = () => {
   const [startDate, setStartDate] = useState('');
   const [selectedEmployee, setSelectedEmployee] = useState('');
   const [selectedJob, setSelectedJob] = useState('');
   const [endDate, setEndDate] = useState('');
   const [reportData, setReportData] = useState([]);
   const [jobData, setJobData] = useState([]);
   const [empData, setEmpData] = useState([]);

   // Define fetchReportData outside of useEffect
   const fetchReportData = async () => {
      try {
         // Fetch data from your API endpoint
         const response = await api.get(`/reports`, {
            params: {
               startDate: startDate,
               endDate: endDate,
               employeeName: selectedEmployee,
               job: selectedJob
            }
         });
         // Set the fetched data to state
         setReportData(response.data.data);
         setJobData(response.data.joblist);
         setEmpData(response.data.emplist);
      } catch (error) {
         // Handle errors
         console.error('Error fetching data:', error);
      }
   };

   useEffect(() => {
      fetchReportData();
   }, [startDate, endDate, selectedEmployee, selectedJob]);

   const handleEmployeeChange = (e) => {
      setSelectedEmployee(e.target.value);
   };

   const handleJobChange = (e) => {
      setSelectedJob(e.target.value);
   };
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
    <div class="reports-form form-login-panel pt-1 px-5 mr-5">
    <form onSubmit={(e) => { e.preventDefault(); fetchReportData(); }}>
          <div class="form-row">
             <div class="form-group">
                <label for="datepicker">From</label>
                <input type="date" class="form-control datepicker"  placeholder="Start" 
                 onChange={(e) => setStartDate(e.target.value)}
                />                      
             </div>
             <div class="form-group ">
                <label for="exampleInputmonth">To</label>
                <input type="date" class="form-control" id="exampleInputmonth" placeholder="End" 
                 onChange={(e) => setEndDate(e.target.value)}
                />
             </div>
             <div class="form-group ">
                <label for="exampleFormControlSelect1">of</label>
             </div>
             <div class="form-group">
             <select className="form-control" id="exampleFormControlSelect1" onChange={handleEmployeeChange} value={selectedEmployee}>
                  <option value="">All</option>
                  {empData.map((empDatas, index) => (
                     <option key={index} value={empDatas.Emp_Name}>{empDatas.Emp_Name}</option>
                  ))}
               </select>
                <label for="exampleFormControlSelect1">Employee For</label>
             </div>
             <div class="form-group">
             <select className="form-control" id="exampleFormControlSelect2" onChange={handleJobChange} value={selectedJob}>
                  <option value="">All</option>
                  {jobData.map((jobDatas, index) => (
                     <option key={index} value={jobDatas.Job_Title}>{jobDatas.Job_Title}</option>
                  ))}
               </select>
                <label for="exampleFormControlSelect1">Job</label>
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
 </div>
 </div>
 </section>
  )
}
