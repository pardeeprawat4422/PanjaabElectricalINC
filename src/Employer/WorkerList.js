import React, { useState, useEffect } from 'react';
import LeftSidebar from './LeftSidebar';
import { useParams } from 'react-router-dom';
import api from '../api';

export const WorkerList = () => {
   const { id } = useParams();
   const [workers, setWorkers] = useState([]);
   const [searchName, setSearchName] = useState('');
   const [searchPhone, setSearchPhone] = useState('');

   useEffect(() => {
      const fetchData = async () => {
         try {
            let url = `/workerlist/${id}`;
            if (searchName || searchPhone) {
               url += `?name=${searchName}&phone=${searchPhone}`;
            }
            const response = await api.get(url);
            setWorkers(response.data.employees);
         } catch (error) {
            console.error('Error fetching job list:', error);
         }
      };

      fetchData();
   }, [id, searchName, searchPhone]);

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
         <div class="top-strip px-5 py-2">
               <div class="side-strip">
                  <span class="icon-img"> <img src="/images/man-icon.png" alt="image"/></span>
                  <p class="pb-0 mb-0 pl-3">Admin</p>
                  <div id="menu-toggle">  
                      <span>|</span>   
                     <img src="/images/menu_leftn.png"/>
                  </div>
            </div>  
            </div>
            <div class="mid-strip px-5 py-3">
               <h3 class="font-weight-medium">JOBS</h3>
               <div class="mid-side-strip">
                  <a href="/addnewJob"  class="btn btn-primary px-4">+ Add New Job  </a>
               </div>
            </div>
            <div className="form-dashboard px-5 py-3">
               <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-row">
                     <div className="col-md-5 col-6">
                        <input 
                           type="text" 
                           className="form-control" 
                           placeholder="Search by Name" 
                           value={searchName} 
                           onChange={(e) => setSearchName(e.target.value)} 
                        />
                     </div>
                     <div className="col-md-5 col-6">
                        <input 
                           type="tel" 
                           className="form-control" 
                           placeholder="Search by Phone" 
                           value={searchPhone} 
                           onChange={(e) => setSearchPhone(e.target.value)} 
                        />
                     </div>
                     <div className="col-md-2 col-12">
                        
                     </div>
                  </div>
               </form>
            </div>
            <div className="dashboard-table px-5 py-3">
               <table className="table">
                  <thead className="thead-light">
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
                     {workers && workers.map((worker, index) => (
                        <tr key={index}>
                           <td>{worker.Emp_Name}</td>
                           <td>{worker.Emp_Email}</td>
                           <td>{worker.Emp_Phone}</td>
                           <td>{worker.Emp_Address}</td>
                           <td>{worker.Job_Status}</td>
                           <td>{worker.Job_Location}</td>
                           <td>{worker.Job_Start_Time}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </section>
   );
};

export default WorkerList;
