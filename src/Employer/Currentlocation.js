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
        // Fetch data from the API based on the IDs
        const response = await api.get(`/employees?ids=${ids.join(',')}`);
        console.log('API Response:', response.data); // Log the API response
        if (Array.isArray(response.data)) {
          setEmployees(response.data); // Update employees with the fetched data if it's an array
        } else {
          console.error('API Response is not an array:', response.data);
        }
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
                        employee.Emp_ID === selectedEmployeeId && (
                           <form key={employee.Emp_ID}>
                              <div className="location-panel my-3">
                                 <p><b>SignIn Location</b></p>
                                 <p>{employee.Emp_SignIn_Location}</p>   
                                 <p>{employee.Emp_LoggedIn_DateTime}</p>                   
                              </div>
                              <div className="location-panel my-3">
                                 <p><b>Job Start Location</b></p>
                                 <p>First Canadian Place</p>                      
                              </div>
                              <div className="form-group savebtn text-center">               
                                 <button type="button" className="btn btn-primary py-2 my-3" data-dismiss="modal" aria-label="Close">Close</button>
                              </div>
                           </form>
                        )
                     ))}


        </div>
      </div>
    </section>
  );
};

export default Currentlocation;
