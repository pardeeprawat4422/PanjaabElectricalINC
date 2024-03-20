import React, { useState, useEffect } from 'react';
import LeftSidebar from './LeftSidebar';
import api from '../api'; // Import your API module

export const JobLocation = () => {
  const [jobLocations, setJobLocations] = useState([]);

  useEffect(() => {
    const fetchJobLocations = async () => {
      try {
        const response = await api.get('/jobloaction');
        console.log('API Response:', response.data);
        setJobLocations(response.data.jobs); // Assuming the response contains an array of job locations
      } catch (error) {
        console.error('Error fetching job locations:', error);
      }
    };

    fetchJobLocations();
  }, []);

  return (
    <section className="employee-dashboard d-flex">
      <LeftSidebar />
      <div className="right-panel" id="right-panel">
        <div className="top-strip px-5 py-2">
          <div className="side-strip">
            <span className="icon-img"> <img src="images/man-icon.png" alt="image" /></span>
            <p className="pb-0 mb-0 pl-3">Philomina</p>
            <div id="menu-toggle" onClick="toggleSidebar">
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
            <div key={location.id}>
              <p><b>{location.Emp_Name}</b></p>
              <p>{location.Job_Location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobLocation;
