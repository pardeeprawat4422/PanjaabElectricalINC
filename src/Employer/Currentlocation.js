import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LeftSidebar from './LeftSidebar';
import api from '../api'; // Import your API module

export const Currentlocation = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const ids = queryParams.getAll('ids');
  const [employees, setEmployees] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/employees?ids=${ids.join(',')}`);
        console.log('API Response:', response.data);
        setEmployees(response.data.employees); // Assuming the response contains an array of employees
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchData();
  }, [ids]);

  return (
    <section className="employee-dashboard d-flex">
      <LeftSidebar />
      <div className="right-panel" id="right-panel">
        <div className="top-strip px-5 py-2">
          <div className="side-strip">
            <span className="icon-img">
              <img src="images/man-icon.png" alt="image" />
            </span>
            <p className="pb-0 mb-0 pl-3">Philomina</p>
            <div id="menu-toggle" onClick="toggleSidebar">
              <span>|</span>
              <img src="images/menu_leftn.png" />
            </div>
          </div>
        </div>
        <div className="mid-strip current-location-heading px-5 py-3">
          <h3 className="font-weight-medium">SignIn Location</h3>
        </div>
        <div className="current-location px-4">
          {employees.map(employee => (
            <div key={employee.id}> {/* Assuming each employee has an 'id' */}
              <h4>{employee.Emp_Name}</h4> {/* Assuming 'Emp_Name' is the employee's name */}
              <p><b>SignIn Location:</b> {employee.Emp_SignIn_Location}</p>
              <p><b>Sign-In Date Time:</b> {employee.Emp_LoggedIn_DateTime}</p>
              {/* Add more fields as needed */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Currentlocation;
