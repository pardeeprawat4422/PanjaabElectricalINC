import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import LeftSidebar from './LeftSidebar';
import api from '../api'; // Import your API module

export const LiveStatus = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate(); // Use useNavigate hook
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

    // Store the selected IDs in session storage
    const selectedIds = Object.keys({ ...checkboxes, [name]: checked }).filter((key) => checkboxes[key]);
    sessionStorage.setItem('selectedIds', JSON.stringify(selectedIds));
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
        // Navigate to the "currentlocation" page and pass the selected IDs as query parameters
        navigate(`/currentlocation?ids=${selectedIds.join(',')}`);
      }
    } else if (action === 'joblocation') {
      // Navigate to the "joblocation" page and pass the selected IDs as query parameters
      navigate(`/joblocation?ids=${selectedIds.join(',')}`);
    }
  };

  useEffect(() => {
    const selectedIds = Object.keys(checkboxes).filter((key) => checkboxes[key]);
    sessionStorage.setItem('selectedIds', JSON.stringify(selectedIds));
    console.log("Stored IDs:", selectedIds);
  }, [checkboxes]);

  useEffect(() => {
    const storedIds = JSON.parse(sessionStorage.getItem('selectedIds'));
    console.log("Retrieved IDs:", storedIds);
    if (storedIds) {
      const updatedCheckboxes = {};
      employees.forEach((employee) => {
        updatedCheckboxes[employee.Emp_ID] = storedIds.includes(employee.Emp_ID);
      });
      setCheckboxes(updatedCheckboxes);
      const allChecked = Object.values(updatedCheckboxes).every((checkbox) => checkbox);
      setSelectAllChecked(allChecked);
    }
  }, []);

  useEffect(() => {
    fetchData();
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
