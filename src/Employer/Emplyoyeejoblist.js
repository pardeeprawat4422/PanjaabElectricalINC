import React, { useState, useEffect } from 'react';
import LeftSidebar from './LeftSidebar';
import api from '../api';
import { useParams, useNavigate } from 'react-router-dom';
export const Emplyoyeejoblist = () => {
   const { id } = useParams();
    const [jobList, setJobList] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await api.get(`/employee-job-list/${id}`);
              setJobList(response.data.employee);
          } catch (error) {
              console.error('Error fetching job list:', error);
          }
      };
  
      fetchData();
  }, [id]);

  // Function to handle menu toggle click
  const handleMenuToggleClick = () => {
    const menu = document.getElementById('sidebar');
    if (menu) {
       menu.classList.toggle('sidebar-active');
    }
 };

 useEffect(() => {
    // Get the menu toggle element
    const menuToggle = document.getElementById('menu-toggle');

    // Add click event listener to the menu toggle when component mounts
    if (menuToggle) {
       menuToggle.addEventListener('click', handleMenuToggleClick);
    }

    // Remove event listener when component unmounts
    return () => {
       if (menuToggle) {
          menuToggle.removeEventListener('click', handleMenuToggleClick);
       }
    };
 }, []);

    return (
        <section className="employee-dashboard d-flex">
            <LeftSidebar />
            <div className="right-panel" id="right-panel">
               <div class="top-strip px-md-5 px-3 py-2">
                  <div class="side-strip">
                     <span class="icon-img"> <img src="/images/man-icon.png" alt="image" /></span>
                     <p class="pb-0 mb-0 pl-3">Admin</p>
                     <div id="menu-toggle">  
                        <span>|</span>   
                        <img src="/images/menu_leftn.png" />
                     </div>
                  </div>
               </div>
               <div class="mid-strip px-5 py-3">
                  <h3 class="font-weight-medium">EMPLOYEES</h3>
                  
               </div>
                <div className="dashboard-table px-5 py-3">
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Job Title</th>
                                <th scope="col">Location</th>
                                <th scope="col">Description</th>
                                <th scope="col">Status</th>
                                <th scope="col">Start Date</th>
                                <th scope="col">Start Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobList.map((job, index) => (
                                <tr key={index}>
                                    <td>{job.Job_Title}</td>
                                    <td>{job.Job_Location}</td>
                                    <td>{job.Job_Description}</td>
                                    <td>{job.Job_Status}</td>
                                    <td>{job.Job_Start_Date}</td>
                                    <td>{job.Job_Start_Time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Pagination and other JSX elements */}
            </div>
        </section>
    );
};
