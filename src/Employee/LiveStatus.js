import LeftSidebar from './LeftSidebar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import api from '../api';
import React, { useState, useEffect } from 'react';

export const LiveStatus = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const fetchData = async () => {
    try {
        const response = await api.get('/employees');
        setEmployees(response.data.employees);
        setErrorMessage('');
    } catch (error) {
        console.error('Error fetching employees:', error);
        setErrorMessage('Failed to fetch employees. Please try again.');
    }
  };

  const [checkboxes, setCheckboxes] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
 
    // Check if all checkboxes are checked
    const allChecked = Object.values({ ...checkboxes, [name]: checked }).every((checkbox) => checkbox);
    setSelectAllChecked(allChecked);
 
    setErrorMessage('');
  };
 
  const handleSelectAll = () => {
    const updatedCheckboxes = {};
    employees.forEach(employee => {
      updatedCheckboxes[employee.Emp_ID] = true;
    });
    setCheckboxes(updatedCheckboxes);
    setSelectAllChecked(true);
    setErrorMessage('');
  };

  const handleDeselectAll = () => {
    const updatedCheckboxes = {};
    employees.forEach(employee => {
      updatedCheckboxes[employee.Emp_ID] = false;
    });
    setCheckboxes(updatedCheckboxes);
    setSelectAllChecked(false);
    setErrorMessage('');
  };
  
  const areAnyChecked = Object.values(checkboxes).some((checkbox) => checkbox);

  const handleButtonClick = (action) => {
    setErrorMessage('');
  
    if (!areAnyChecked) {
      setErrorMessage('Please select at least one Employee to see Location.');
      return;
    }
  
    // Get the IDs of selected checkboxes
    const selectedIds = Object.keys(checkboxes).filter((key) => checkboxes[key]);
  
    if (action === 'signin') {
      if (selectedIds.length === 0) {
        setErrorMessage('Please select at least one Employee to see Sign-in Location.');
      } else {
        // Navigate to the "sign-in-location" page and pass the selected IDs as query parameters
        navigate(`/currentlocation?ids=${selectedIds.join(',')}`);
      }
    } else if (action === 'joblocation') {
      navigate(`/joblocation?ids=${selectedIds.join(',')}`);
    }
  };
 


  useEffect(() => {
    fetchData();
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
              <span >|</span>   
              <img src="images/menu_leftn.png" />
            </div>
          </div>
        </div>
        <div className="mid-strip px-5 py-3">
          <h3 className="font-weight-medium mt-5">Please Select employee(s) to see the live location</h3>
        </div>
        <div className="inner-selectbox px-3 py-2">
          <div className="row">
            {employees.map((employee) => (
              <div className="col-md-4 col-6" key={employee.Emp_ID}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name={employee.Emp_ID}
                    value={employee.Emp_ID}
                    id={`employeeCheckbox${employee.Emp_ID}`}
                    onChange={handleCheckboxChange}
                    checked={checkboxes[employee.Emp_ID] || false}
                  />
                  <label className="form-check-label" htmlFor={`employeeCheckbox${employee.Emp_ID}`}>
                    {employee.Emp_Name}
                  </label>
                </div>
              </div>
            ))}
          </div>
          <div className="livelocation-btn px-5 py-4 d-flex mt-4">
            <div className="selectbox-btn mr-4 my-3">
              <button className="btn btn-primary px-4 py-2" onClick={selectAllChecked ? handleDeselectAll : handleSelectAll}>
                {selectAllChecked ? 'Deselect All' : 'Select All'}
              </button>
            </div>
            <div className="selectbox-btn mr-4 my-3">
              <button className="btn btn-primary px-4 py-2" onClick={() => handleButtonClick('signin')}>
                SignIn Location
              </button>
            </div>
            <div className="selectbox-btn mr-4 my-3">
              <button className="btn btn-primary px-4 py-2" onClick={() => handleButtonClick('joblocation')}>
                Job Location
              </button>
            </div>
          </div>
          {errorMessage && <div className="error-message text-danger ml-5 bold">{errorMessage}</div>}
        </div>
      </div>
    </section>
  );
};

export default LiveStatus;
