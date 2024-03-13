import React, { useState, useEffect } from 'react';
import LeftSidebar from './LeftSidebar';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

export const EditJobEmpoyee = () => {
    const { id } = useParams();
    const [selectedEmployees, setSelectedEmployees] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [checkbox, setCheckbox] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [jobTitle, setjobTitle] = useState('');
    const [location, setlocation] = useState('');
    const [description, setdescription] = useState('');
    const [note, setnote] = useState('');
    const [startDate, setstartDate] = useState('');
    const [startTime, setstartTime] = useState('');
    const [days, setdays] = useState('');
    const [formData, setFormData] = useState({
        jobTitle: '',
        location: '',
        description: '',
        note: '',
        startDate: '',
        startTime: '',
        days: '',
        numberOfEmployees: 0 // Initialize count of selected employees to 0
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    
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
        setjobTitle(initialFormData.jobTitle);
        setlocation(initialFormData.location);
        setdescription(initialFormData.description);
        setnote(initialFormData.note);
        setstartDate(initialFormData.startDate);
        setstartTime(initialFormData.startTime);
        setdays(initialFormData.days);

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
            setjobTitle(value);
            break;
        case 'location':
            setlocation(value);
            break;
        case 'description':
            setdescription(value);
            break;
        case 'note':
            setnote(value);
            break;
        case 'startDate':
            setstartDate(value);
            break;
        case 'startTime':
            setstartTime(value);
            break;
        case 'days':
            setdays(value);
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
    if (e.target.checked) {
        setSelectedEmployees([...selectedEmployees, employeeId]);
    } else {
        setSelectedEmployees(selectedEmployees.filter(id => id !== employeeId));
    }
    
    // Update numberOfEmployees directly based on selectedEmployees length
    setFormData({ ...formData, numberOfEmployees: e.target.checked ? formData.numberOfEmployees + 1 : formData.numberOfEmployees - 1 });
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
                await api.put(`/jobsemployees/${id}`, {
                   jobTitle: jobTitle,
                   location: location,
                   description: description,
                   note: note,
                   startDate: startDate,
                   startTime: startTime,
                   days: days,
                   numberOfEmployees: selectedEmployees.length
                });
                console.log('Job updated successfully');
                setSubmitted(true);
                setTimeout(() => {
                   navigate('/employeejobs');
                }, 3000);
             } catch (error) {
                console.error('Error updating employee details:', error);
             }
        } else {
            setErrors(newErrors);
         }
    };

    return (
        <section className="employee-dashboard d-flex">
            <LeftSidebar />
            <div className="right-panel" id="right-panel">
                <div className="top-strip px-5 py-2">
                    <div className="side-strip">
                        <span className="icon-img"> <img src="/images/man-icon.png" alt="image" /></span>
                        <p className="pb-0 mb-0 pl-3">Philomina</p>
                        <div id="menu-toggle" onClick="toggleSidebar">
                            <span>|</span>
                            <img src="/images/menu_leftn.png" alt="menu" />
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
                       Job Updated successfully.
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
                                          <div className="col-md-4 col-6" key={employee.Emp_ID}> {/* Adding key prop here */}
                                             <div className="form-check">
                                                   <input className="form-check-input" type="checkbox" name="empname[]" value={employee.Emp_ID} id={`employeeCheckbox${employee.Emp_ID}`} onChange={handleCheckboxChange} selected/>
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
