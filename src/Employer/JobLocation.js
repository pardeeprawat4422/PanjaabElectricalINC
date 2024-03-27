import React, { useState, useEffect } from 'react';
import LeftSidebar from './LeftSidebar';
import { useLocation } from 'react-router-dom';
import api from '../api'; // Import your API module

export const JobLocation = () => {
  const [jobLocations, setJobLocations] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const employeeIds = queryParams.get('ids');
  console.log(employeeIds);
  useEffect(() => {
    const fetchJobLocations = async () => {
      try {
        const response = await api.get(`/getjoblocation?employeeIds=${employeeIds}`);
        console.log('API Response:', response.data);
        setJobLocations(response.data.jobs); // Assuming the response contains an array of job locations
      } catch (error) {
        console.error('Error fetching job locations:', error);
      }
    };

    fetchJobLocations();
  }, []);

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
        <div className="top-strip px-5 py-2">
          <div className="side-strip">
            <span className="icon-img"> <img src="images/man-icon.png" alt="image" /></span>
            <p className="pb-0 mb-0 pl-3">Admin</p>
            <div id="menu-toggle">
              <span>|</span>
              <img src="images/menu_leftn.png" />
            </div>
          </div>
        </div>
        <div className="mid-strip current-location-heading px-5 py-3">
          <h3 className="font-weight-medium">Job Location</h3>
        </div>
        <div className="current-location px-4">
  {jobLocations.map(location => (
    <div class="location-panel my-3">
    <div key={location.id}>
      <p><b>{location.Emp_Name}</b></p>
      {location.Job_ClockIn_Location ? (
        <p>{location.Job_ClockIn_Location}</p>
      ) : (
        <p>Job Not Started Yet</p>
      )}
       </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default JobLocation;
