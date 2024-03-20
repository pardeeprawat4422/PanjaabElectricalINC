import React, { useState, useEffect } from 'react';
import LeftSidebar from './LeftSidebar';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

export const EditJobEmpoyee = () => {
    const { id } = useParams();
    const [selectedEmployees, setSelectedEmployees] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [checkbox, setCheckbox] = useState([]);
    const [jobTitle, setJobTitle] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [note, setNote] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [days, setDays] = useState('');
    const [empName, setEmpName] = useState('');
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
  
    const fetchJobsData = async () => {
      try {
          const response = await api.get(`/singlejoblist/${id}`);
          const { data } = response;
  
          // Set initial form data with fetched values
          const initialFormData = {
              jobTitle: data.jobs[0].Job_Title,
              location: data.jobs[0].Job_Location,
              description: data.jobs[0].Job_Description,
              note: data.jobs[0].Job_Notes,
              startDate: data.jobs[0].Job_Start_Date.substring(0, 10),
              startTime: data.jobs[0].Job_Start_Time,
              days: data.jobs[0].Job_Days,
              numberOfEmployees: 0 // Initialize count of selected employees to 0
          };
  
          // Set form data state
          setFormData(initialFormData);
          setJobTitle(initialFormData.jobTitle);
          setLocation(initialFormData.location);
          setDescription(initialFormData.description);
          setNote(initialFormData.note);
          setStartDate(initialFormData.startDate);
          setStartTime(initialFormData.startTime);
          setDays(initialFormData.days);
  
          // Set checkbox state
          setCheckbox(data.jobs);
      } catch (error) {
          console.error('Error fetching jobs:', error);
          setErrorMessage('Failed to fetch jobs. Please try again.');
      }
  };
  
   useEffect(() => {
      fetchData();
      fetchJobsData();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the state based on the input name
    switch (name) {
        case 'jobTitle':
            setJobTitle(value);
            break;
        case 'location':
            setLocation(value);
            break;
        case 'description':
            setDescription(value);
            break;
        case 'note':
            setNote(value);
            break;
        case 'startDate':
            setStartDate(value);
            break;
        case 'startTime':
            setStartTime(value);
            break;
        case 'days':
            setDays(value);
            break;
        case 'empname':
            setEmpName(value); // Corrected to setEmpName
            break;
        // handle other cases for other input fields
        default:
            break;
    }

    setFormData({ 
        ...formData, 
        [name]: value 
    });
};
const handleCheckboxChange = (e) => {
    const employeeId = parseInt(e.target.value);
    const isChecked = e.target.checked;
    
    setSelectedEmployees(prevSelectedEmployees => {
        const updatedSelectedEmployees = isChecked 
            ? [...prevSelectedEmployees, employeeId] 
            : prevSelectedEmployees.filter(id => id !== employeeId);
        console.log('Selected Employees:', updatedSelectedEmployees);
        return updatedSelectedEmployees;
    });

    setFormData(prevFormData => {
        let updatedEmpname;
        if (Array.isArray(prevFormData.empname)) {
            updatedEmpname = isChecked 
                ? [...prevFormData.empname, employeeId] 
                : prevFormData.empname.filter(id => id !== employeeId);
        } else {
            updatedEmpname = isChecked ? [employeeId] : [];
        }
        console.log('Empname:', updatedEmpname);
        return {
            ...prevFormData,
            numberOfEmployees: updatedEmpname.length,
            empname: updatedEmpname
        };
    });
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
                const response = await api.put(`/jobsemployees/${id}`, formData);
                //                              ^^^^^^^^^^^^^^^^^^^
                console.log('Response from API:', response.data);
                setSubmitted(true);
                setTimeout(() => {
                    navigate('/employeejobs');
                }, 2000); 
            } catch (error) {
                console.error('Error updating job:', error);
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
                        <p className="pb-0 mb-0 pl-3">Philomina</p>
                        <div id="menu-toggle" onClick="toggleSidebar">
                            <span>|</span>
                            <img src="images/menu_leftn.png" alt="menu" />
                        </div>
                    </div>
                </div>
                <div className="addnew-employee h-100">
                    <div className="upper-addnew-heading px-5 d-flex pt-3">
                        <a href="/employeejobs"> <i className="fa-solid fa-arrow-left"></i></a>
                        <h2>Edit Job</h2>
                    </div>
                    <div className="addemployee-form form-login-panel pt-4">
                    {submitted && (
                     <div className="alert alert-success" role="alert">
                       Job Update successfully.
                     </div>
                  )}
                        <form onSubmit={handleSubmit}>
                            <div className="form-row pt-4">
                                <div className="form-group col-md-5 px-3">
                                    <label htmlFor="jobTitle">Job Title</label>
                                    <input type="text" className="form-control" id="jobTitle" name="jobTitle" placeholder="Job Title" value={jobTitle} onChange={handleChange} />
                                    {errors.jobTitle && <span className="text-danger">{errors.jobTitle}</span>}
                                </div>
                                <div className="form-group col-md-5 px-3">
                                    <label htmlFor="location">Location</label>
                                    <input type="text" className="form-control" id="location" name="location" value={location}  onChange={handleChange} />
                                    {errors.location && <span className="text-danger">{errors.location}</span>}
                                </div>
                                <div className="form-group col-md-5 px-3">
                                    <label htmlFor="description">Description</label>
                                    <textarea className="form-control" id="description" name="description" aria-label="With textarea" value={description} onChange={handleChange}></textarea>
                                    {errors.description && <span className="text-danger">{errors.description}</span>}
                                </div>
                                <div className="form-group col-md-5 px-3">
                                    <label htmlFor="note">Special Note</label>
                                    <textarea className="form-control" id="note" name="note" aria-label="With textarea" value={note} onChange={handleChange}></textarea>
                                    {errors.note && <span className="text-danger">{errors.note}</span>}
                                </div>
                                <div className="form-group col-md-5 px-3">
                                    <label htmlFor="startDate">Start Date</label>
                                    <input type="date" className="form-control" id="startDate" name="startDate"  value={startDate}  onChange={handleChange} />
                                    {errors.startDate && <span className="text-danger">{errors.startDate}</span>}
                                </div>
                                <div className="form-group col-md-5 px-3">
                                    <label htmlFor="startTime">Start Time</label>
                                    <input type="time" className="form-control" id="startTime" name="startTime" value={startTime}  onChange={handleChange} />
                                    {errors.startTime && <span className="text-danger">{errors.startTime}</span>}
                                </div>
                                <div className="form-group col-md-5 px-3">
                                    <label htmlFor="days">Job Days</label>
                                    <input type="number" className="form-control" id="days" name="days"  value={days}  onChange={handleChange} />
                                    {errors.days && <span className="text-danger">{errors.days}</span>}
                                </div>
                                <div className="form-group col-md-5 px-3"></div>
                                <div className="inner-selectbox px-5 mx-4 pb-2 w-100">
                                <h6 for="employeeCheckbox px-5">Assign to:</h6>
                                <div className="row">
                                    {employees.map((employee) => (
                                        <div className="col-md-4 col-6" key={employee.Emp_ID}>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="empname[]"
                                                    value={employee.Emp_ID}
                                                    id={`employeeCheckbox${employee.Emp_ID}`}
                                                    onChange={handleCheckboxChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor={`employeeCheckbox${employee.Emp_ID}`}
                                                >
                                                    {employee.Emp_Name}
                                                </label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                 </div>
                                 {(selectedEmployees.length === 0 && errors.checkbox) && <span className="text-danger">{errors.checkbox}</span>}
                                <div className="form-group submitbtn col-md-12">
                                    <input type="submit" className="btn btn-primary py-2 my-3" value="Update" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
