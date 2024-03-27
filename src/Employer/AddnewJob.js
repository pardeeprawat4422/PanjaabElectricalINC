import React, { useState, useEffect } from 'react';
import LeftSidebar from './LeftSidebar';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

export const AddnewJob = () => {
    const [selectedEmployees, setSelectedEmployees] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        jobTitle: '',
        location: '',
        description: '',
        note: '',
        startDate: '',
        startTime: '',
        days: '',
        empname: [],
        numberOfEmployees: 0 // Initialize count of selected employees to 0
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (e) => {
        const employeeId = parseInt(e.target.value); // Retrieve the ID from the checkbox value
        const isChecked = e.target.checked;
    
        // Update selectedEmployees state based on whether the checkbox is checked or unchecked
        setSelectedEmployees(prevSelectedEmployees => {
            if (isChecked) {
                return [...prevSelectedEmployees, employeeId];
            } else {
                return prevSelectedEmployees.filter(id => id !== employeeId);
            }
        });
    
        // Update empname field with the IDs of selected employees
        setFormData(prevFormData => ({
            ...prevFormData,
            numberOfEmployees: isChecked ? prevFormData.numberOfEmployees + 1 : prevFormData.numberOfEmployees - 1, // Update the number of selected employees
            empname: isChecked ? [...prevFormData.empname, employeeId] : prevFormData.empname.filter(id => id !== employeeId) // Update the empname field based on checkbox state
        }));
    };
    
    
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
            }
        });
        if (selectedEmployees.length === 0 && Object.keys(formData).every(key => formData[key] === '')) {
            newErrors.checkbox = 'Please select at least one employee.';
        }
        setErrors(newErrors);
        
        if (Object.keys(newErrors).length === 0) {
            try {
                console.log('Sending request to API:', formData);
                const response = await api.post('/addnewjobs', formData);
               
               console.log('Response from API:', response.data);
               setSubmitted(true);
               setTimeout(() => {
                  navigate('/employeejobs');
                }, 2000); 
            } catch (error) {
                console.error('Error adding job:', error);
                // Handle error response
            }
        }
    };

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
                            <img src="images/menu_leftn.png" alt="menu" />
                        </div>
                    </div>
                </div>
                <div className="addnew-employee h-100">
                    <div className="upper-addnew-heading px-5 d-flex pt-3">
                        <a href="/employeejobs"> <i className="fa-solid fa-arrow-left"></i></a>
                        <h2>Add New Job</h2>
                    </div>
                    <div className="addemployee-form form-login-panel pt-4">
                    {submitted && (
                     <div className="alert alert-success" role="alert">
                       Job Added successfully.
                     </div>
                  )}
                        <form onSubmit={handleSubmit}>
                            <div className="form-row pt-4">
                                <div className="form-group col-md-5 px-3">
                                    <label htmlFor="jobTitle">Job Title</label>
                                    <input type="text" className="form-control" id="jobTitle" name="jobTitle" placeholder="Job Title" onChange={handleChange} />
                                    {errors.jobTitle && <span className="text-danger">{errors.jobTitle}</span>}
                                </div>
                                <div className="form-group col-md-5 px-3">
                                    <label htmlFor="location">Location</label>
                                    <input type="text" className="form-control" id="location" name="location" placeholder="Location" onChange={handleChange} />
                                    {errors.location && <span className="text-danger">{errors.location}</span>}
                                </div>
                                <div className="form-group col-md-5 px-3">
                                    <label htmlFor="description">Description</label>
                                    <textarea className="form-control" id="description" name="description" aria-label="With textarea" placeholder="Description" onChange={handleChange}></textarea>
                                    {errors.description && <span className="text-danger">{errors.description}</span>}
                                </div>
                                <div className="form-group col-md-5 px-3">
                                    <label htmlFor="note">Special Note</label>
                                    <textarea className="form-control" id="note" name="note" aria-label="With textarea" placeholder="Special Note" onChange={handleChange}></textarea>
                                    {errors.note && <span className="text-danger">{errors.note}</span>}
                                </div>
                                <div className="form-group col-md-5 px-3">
                                    <label htmlFor="startDate">Start Date</label>
                                    <input type="date" className="form-control" id="startDate" name="startDate" placeholder="Start Date" onChange={handleChange} />
                                    {errors.startDate && <span className="text-danger">{errors.startDate}</span>}
                                </div>
                                <div className="form-group col-md-5 px-3">
                                    <label htmlFor="startTime">Start Time</label>
                                    <input type="time" className="form-control" id="startTime" name="startTime" placeholder="Start Time" onChange={handleChange} />
                                    {errors.startTime && <span className="text-danger">{errors.startTime}</span>}
                                </div>
                                <div className="form-group col-md-5 px-3">
                                    <label htmlFor="days">Job Days</label>
                                    <input type="number" className="form-control" id="days" name="days" placeholder="Enter number of days" onChange={handleChange} />
                                    {errors.days && <span className="text-danger">{errors.days}</span>}
                                </div>
                                <div className="form-group col-md-5 px-3"></div>
                                <div className="inner-selectbox px-5 mx-4 pb-2 w-100">
                                <h6 for="employeeCheckbox px-5">Assign to:</h6>
                                    <div className="row">                                        
                                        {employees.map((employee) => (
                                          <div className="col-md-4 col-6" key={employee.Emp_ID}> {/* Adding key prop here */}
                                             <div className="form-check">
                                                   <input className="form-check-input" type="checkbox" name="empname[]" value={employee.Emp_ID} id={`employeeCheckbox${employee.Emp_ID}`} onChange={handleCheckboxChange} />
                                                   <label className="form-check-label" htmlFor={`employeeCheckbox${employee.id}`}>
                                                      {employee.Emp_Name}
                                                   </label>
                                             </div>
                                          </div>
                                       ))}
                                    </div>
                                </div>
                                {(selectedEmployees.length === 0 && errors.checkbox) && <span className="text-danger">{errors.checkbox}</span>}
                                <div className="form-group submitbtn col-md-12">
                                    <input type="submit" className="btn btn-primary py-2 my-3" value="Submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
