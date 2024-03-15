import React, { useState, useEffect } from 'react';
import LeftSidebar from './LeftSidebar';
import api from '../api';

export const EmployeeJobs = () => {
    const [employeeToDelete, setEmployeeToDelete] = useState(null);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async (status = null) => {
        try {
            const response = await api.get('/jobslist', {
                params: {
                    status: status // Pass the status as a query parameter
                }
            });
            setJobs(response.data.jobs);
        } catch (error) {
            console.error('Error fetching job list:', error);
        }
    };
    const handleStatusChange = (e) => {
        const status = e.target.value;
        
        if (status === 'All') {
            fetchJobs(); // Fetch all jobs
        } else {
            fetchJobs(status); // Fetch jobs with specific status
        }
    };


    const handleDelete = async (jobId) => {
        try {
            await api.delete(`/jobs/${jobId}`);
            setJobs(jobs.filter(job => job.Job_Id !== jobId));
            console.log('Job deleted successfully');
        } catch (error) {
            console.error('Error deleting job:', error);
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
                            <img src="images/menu_leftn.png" />
                        </div>
                    </div>
                </div>
                <div className="mid-strip px-5 py-3">
                    <h3 className="font-weight-medium">JOBS</h3>
                    <div className="mid-side-strip">
                        <a href="/addnewJob" className="btn btn-primary px-4">+ Add New Job  </a>
                    </div>
                </div>
                <div className="form-dashboard  form-jobs px-5 py-3">
                    <form>
                        <div className="form-row">
                            <div className="form-group  col-sm-5 px-3 mb-0">
                                <label>Serch by Status </label>
                                <select className="form-control ml-4" id="exampleFormControlSelect1" onChange={handleStatusChange}>
                                    <option>All</option>
                                    <option>Completed</option>
                                    <option>In-progress</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="dashboard-table px-5 py-3">
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Job Name</th>
                                <th scope="col">Job Location</th>
                                <th scope="col">Description</th>
                                <th scope="col">Special Note</th>
                                <th scope="col">Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Employee</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map(job => (
                                <tr key={job.id}>
                                    <td>{job.Job_Title}</td>
                                    <td>{job.Job_Location}</td>
                                    <td>{job.Job_Description}</td>
                                    <td>{job.Job_Notes}</td>
                                    <td>{job.Job_Start_Date ? job.Job_Start_Date.substring(0, 10) : ''}</td>
                                    <td>{job.Job_Status}</td>
                                    <td><a href={`/workerlist/${job.Job_Id}`} className="employee-list-num" data-toggle="tooltip" data-placement="top" title="Employee List">{job.No_Of_Emp}</a></td>
                                    <td className="table-side-icon">
                                    {job.Job_Status !== 'In-progress' && job.Job_Status !== 'Completed' &&
                                        <span>
                                            <a href={`/editjobemployee/${job.Job_Id}`} data-toggle="tooltip" data-placement="top" title="Edit Employee Job"><img src="images/Icons.png" alt="icon" /></a>
                                        </span>
                                    }
                                    {
                                        (job.Job_Status !== 'In-progress' && job.Job_Status !== 'Completed') &&
                                        <span data-toggle="modal" data-target="#exampleModalCenter2">
                                            <a data-placement="top" data-toggle="tooltip" title="Delete Employee" onClick={() => setEmployeeToDelete(job)}>
                                                <img src="images/trash-can-alt-2.png" alt="icon" />
                                            </a>
                                        </span>
                                    }
                                    {
                                        (job.Job_Status === 'In-progress' || job.Job_Status === 'Completed') &&
                                        <span>Not Allowed</span>
                                    }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Pagination and other elements */}
                </div>
            </div>
            <div className="modal fade delete-modal bd-example-modal-lg" id="exampleModalCenter2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa-solid fa-xmark"></i></span>
                            </button>
                        </div>
                        <div className="modal-body pt-5">
                            <h3 className="text-center">Are you sure you want to delete {employeeToDelete ? `Em_${employeeToDelete.Job_Id}` : 'this employee'}?</h3>
                            <p>This will delete this employee Permanently. You cannot Undo this action.</p>
                            <div className="modal-deletebtn text-center">
                                <button type="button" className="btn btn-outline-dark" data-dismiss="modal">No</button>
                                <button type="button" className="btn btn-primary ml-2" data-dismiss="modal" onClick={() => handleDelete(employeeToDelete ? employeeToDelete.Job_Id : null)}>Yes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
