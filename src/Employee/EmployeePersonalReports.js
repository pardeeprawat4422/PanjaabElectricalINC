import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

const EmployeePersonalReports = () => {
  const { id } = useParams();
  const [jobs, setJobs] = useState([]);
  const [Counts, setCount] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [activeTab, setActiveTab] = useState('LAJ');

  useEffect(() => {
    fetchJobs();
    handleClockIn();
    fetchname();
  }, [activeTab, id]);

  const fetchname = async () => {
    try {
      const response = await api.get(`/employee/${id}`);
      setEmployeeName(response.data.emp_name); // Assumin
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };
  const fetchJobs = async () => {
    try {
      const response = await api.get(`/employeejoblist/${id}/${activeTab}`);
      setJobs(response.data.employees);
      setCount(response.data.count)
      console.log(response)
      console.log(response.data.employees[0].Job_Running_Status)
      console.log(jobs.length)
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const handleTabClick = async (tab) => {
    setActiveTab(tab);
  };

  const handleClockIn = async (empId, jobId) => {
    try {
      const response = await api.post('/jobclockin', {
        emp_id: empId,
        job_id: jobId
      });
  
      // Update jobs state after successful clock-in
      fetchJobs(); // This will fetch the updated data from the server
    } catch (error) {
      console.error('Error clocking in:', error);
    }
  };
 
  const handlePaused = async (empId, jobId) => {
    try {
      const response = await api.post('/jobpaused', {
        emp_id: empId,
        job_id: jobId
      });
  
      // Update jobs state after successful pause
      fetchJobs();
    } catch (error) {
      console.error('Error pausing the job:', error);
    }
  };
 
  const handleResumed = async (empId, jobId) => {
    try {
      const response = await api.post('/jobresumed', {
        emp_id: empId,
        job_id: jobId
      });
  
      // Update jobs state after successful resume
      fetchJobs();
    } catch (error) {
      console.error('Error resuming the job:', error);
    }
  };
 
  const clockOut = async (empId, jobId) => {
    try {
      const response = await api.post('/jobclockout', {
        emp_id: empId,
        job_id: jobId
      });
     console.log(response)
      // Update jobs state after successful resume
      fetchJobs();
    } catch (error) {
      console.error('Error Clocking Out the job:', error);
    }
  };

  const clockOutPaused = async (empId, jobId) => {
    alert("Please Resume the Job First. You can't directly ClockOut the Job")
  };
  

  return (
    <section className="main-panel">
      <div className="nav-menu">
      <div class="left-navlogo">
          <a href="/employerreports"><img src="/images/punjab-electrical-inc-01.png" alt="logo" /></a>
          
       </div>
       <div class="right-navsection">
          <div class="navside-strip">
             <span class="icon-img"> <img src="/images/man-icon.png"  alt="image" /></span>
             <p class="pb-0 mb-0 pl-3">{employeeName}</p>
          </div>
          <div class="mid-side-strip px-3">
            <a href="/" class="btn btn-primary px-4 py-2">LOGOUT</a>
            </div>
       </div>
      </div>
      <div className="reports-output">
        <div className="reports-output-content">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link btn btn-outline-dark ${activeTab === 'LAJ' ? 'active' : ''}`}
                onClick={() => handleTabClick('LAJ')}
              >
                Latest Assigned Jobs
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn btn-outline-dark ml-2 ${activeTab === 'JIP' ? 'active' : ''}`}
                onClick={() => handleTabClick('JIP')}
              >
                Jobs In-Progress
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
          {activeTab === 'LAJ' && (
          
          <table className="table">
                <thead className="thead-light">
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
                  {jobs.map(job => (
                    <tr key={job.id}>
                      <td>{job.Job_Title}</td>
                      <td>{job.Job_Location}</td>
                      <td>{job.Job_Description}</td>
                      <td>{job.Job_Notes}</td>
                      <td>{job.Job_Start_Date ? job.Job_Start_Date.substring(0, 10) : ''} Time {job.Job_Start_Time} </td>
                      <td>
                        {Counts > 0 ? (
                          <b>Your another job is in progress.</b>
                          
                        ) : (
                          <button
                            className="btn btn-primary"
                            onClick={() => handleClockIn(job.Emp_ID, job.Job_Id)}
                          >
                            Clock-In
                          </button>
                        )}
                      </td>
                     </tr>
                  ))}
                </tbody>
              </table>
            )}
          {activeTab === 'JIP' && (
           <table className="table">
           <thead className="thead-light">
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
             {jobs.map(job => (
               <tr key={job.id}>
                 <td>{job.Job_Title}</td>
                 <td>{job.Job_Location}</td>
                 <td>{job.Job_Description}</td>
                 <td>{job.Job_Notes}</td>
                 <td>{job.Job_Start_Date ? job.Job_Start_Date.substring(0, 10) : ''} Time {job.Job_Start_Time} </td>
                 <td>{job.Job_Running_Status === 'Running' && (
                           <div className="d-flex">
                             <button className="btn btn-primary btn-sm mr-2" onClick={() => clockOut(job.Emp_ID,job.Job_Id)}>
                                    Clock-Out
                              </button>
                              <button className="btn btn-primary btn-sm" onClick={() => handlePaused(job.Emp_ID,job.Job_Id)}>
                                    Paused
                              </button>
                           </div>
                        )}
                        {job.Job_Running_Status === 'Paused' && (
                           <div  className="d-flex">
                              <button className="btn btn-primary btn-sm mr-2" onClick={() => clockOutPaused(job.Emp_ID,job.Job_Id)}>
                                    Clock-Out
                              </button>
                              <button className="btn btn-primary btn-sm" onClick={() => handleResumed(job.Emp_ID,job.Job_Id)}>
                                    Resume
                              </button>
                           </div>
                        )}</td>
               </tr>
             ))}
           </tbody>
         </table>
          )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeePersonalReports;
