import React, { useState, useEffect } from 'react';
import LeftSidebar from './LeftSidebar';
import api from '../api';


export const EmployeeDashboard = () => {
   const [employees, setEmployees] = useState([]);
   const [searchName, setSearchName] = useState('');
   const [searchPhone, setSearchPhone] = useState('');
   const [errorMessage, setErrorMessage] = useState('');
   const [employeeToDelete, setEmployeeToDelete] = useState(null);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null); // State to store selected employee ID

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await api.get(`/employees?name=${searchName}&phone=${searchPhone}`);
            console.log(response.data);
            setEmployees(response.data.employees);
            setErrorMessage(''); // Reset error message if data is successfully fetched
         } catch (error) {
            console.error('Error fetching employees:', error);
            setErrorMessage('No Record Found.'); // Set error message if there's an error
         }
      };

      fetchData(); // Call fetchData initially and whenever search criteria change
   }, [searchName, searchPhone]);
  

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



   

    const fetchData = async () => {
       try {
         const response = await api.get(`/employees?name=${searchName}&phone=${searchPhone}`);
         console.log(response.data);
         setEmployees(response.data.employees);
         setErrorMessage(''); // Reset error message if data is successfully fetched
       } catch (error) {
         console.error('Error fetching employees:', error);
         setErrorMessage('Failed to fetch employees. Please try again.'); // Set error message if there's an error
       }
     };
  

 const handleDelete = async (employeeId) => {
    try {
      await api.delete(`/employees/${employeeId}`);
      // Filter out the deleted employee from the state
      setEmployees(employees.filter(employee => employee.Emp_ID !== employeeId));
      console.log('Employee deleted successfully');
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };
  const handleEmployeeIDClick = (employeeId) => {
   // Set the selected employee ID when an employee's ID is clicked
   setSelectedEmployeeId(employeeId);
};
  return (
    <section class="employee-dashboard d-flex">
        <LeftSidebar />
         <div class="right-panel" id="right-panel">
            <div class="top-strip px-5 py-2">
               <div class="side-strip">
                  <span class="icon-img"> <img src="images/man-icon.png" alt="image" /></span>
                  <p class="pb-0 mb-0 pl-3">Admin</p>
                  <div id="menu-toggle">  
                     <span>|</span>   
                     <img src="images/menu_leftn.png" />
                  </div>
               </div>
            </div>
            <div class="mid-strip px-5 py-3">
               <h3 class="font-weight-medium">EMPLOYEES</h3>
               <div class="mid-side-strip">
                  <a href="/addnewemployee"  class="btn btn-primary px-4 py-2">+ Add New Employee</a>
               </div>
            </div>
            <div class="form-dashboard px-5 py-3">
            <form onSubmit={(e) => { e.preventDefault(); fetchData(); }}>
                  <div className="form-row">
                     <div className="col-md-5 col-6">
                        <input 
                           type="text" 
                           className="form-control" 
                           placeholder="Name" 
                           value={searchName} 
                           onChange={(e) => setSearchName(e.target.value)} // Update searchName state
                        />
                     </div>
                     <div className="col-md-5 col-6">
                        <input 
                           type="tel" 
                           className="form-control" 
                           placeholder="Phone" 
                           value={searchPhone} 
                           onChange={(e) => setSearchPhone(e.target.value)} // Update searchPhone state
                        />
                     </div>
                  </div>
               </form>
            </div>
           
            <div class="dashboard-table px-5 py-3">
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
               <table class="table">
                  <thead class="thead-light">
                     <tr>
                        <th scope="col">Employee ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                     </tr>
                  </thead>
               <tbody>
                  {employees.map(employee => (
                     <tr key={employee.Emp_ID}>
                         
                        <td> <a data-toggle="modal" class="employeedashbordid" data-target="#exampleModalCenter3"   onClick={() => handleEmployeeIDClick(employee.Emp_ID)}  >TH-{employee.Emp_ID} </a></td>
                        <td>{employee.Emp_Name}</td>
                        <td>{employee.Emp_Email}</td>
                        <td>{employee.Emp_Phone}</td>
                        <td>{employee.Emp_Address}</td>
                        <td class="table-side-icon">
                           <span>
                           <a href={`/editemploye/${employee.Emp_ID}`} data-toggle="tooltip" data-placement="top" title="Edit Employee"><img src="images/Icons.png"  alt="icon" /></a>
                           </span>
                           <span data-toggle="modal"  data-target="#exampleModalCenter2">
                           <a data-placement="top" data-toggle="tooltip" title="Delete Employee" onClick={() => setEmployeeToDelete(employee)} ><img src="images/trash-can-alt-2.png"  alt="icon" /></a>
                           </span>
                           <a href={`/emplyoyeejoblist/${employee.Emp_ID}`} data-toggle="tooltip"  title="Employee Job List" ><img src="images/eye.png"  alt="icon" /></a>
                        </td>
                     </tr>
                       ))}
                  </tbody>
               </table>
            </div>
         </div>
      
         <div class="modal fade edit-modal bd-example-modal-lg" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
               <div class="modal-content">
                  <div class="modal-header">        
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true"><i class="fa-solid fa-xmark"></i></span>
                     </button>
                  </div>
                  <div class="modal-body pt-5">
                     <h3>Edit the details of Employee</h3>
                     <form class="py-3">
                        <div class="form-group">
                           <input type="text" class="form-control" id="exampleInputtext"  placeholder="Enter your name" />                      
                        </div>
                        <div class="form-group">
                           <input type="email" class="form-control" id="exampleInputlocation" placeholder="Enter your email" />
                        </div>
                        <div class="form-group">
                           <textarea class="form-control" aria-label="With textarea" placeholder="Enter your Description"></textarea>
                        </div>
                        <div class="form-group savebtn text-center">                       
                           <input type="submit" class="btn btn-primary py-2 my-3" value="Save" />
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         
         <div class="modal fade delete-modal bd-example-modal-lg" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
         <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
                  <div class="modal-header">        
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="fa-solid fa-xmark"></i></span>
                     </button>
                  </div>
                  <div class="modal-body pt-5">
                     <h3 class="text-center">Are you sure you want to delete {employeeToDelete ? `Em_${employeeToDelete.Emp_ID}` : 'this employee'}?</h3>
                     <p>This will delete this employee Permanently. You cannot Undo this action.</p>
                     <div class="modal-deletebtn text-center">
                        <button type="button" class="btn btn-outline-dark" data-dismiss="modal">No</button>
                        <button type="button" onClick={() => handleDelete(employeeToDelete ? employeeToDelete.Emp_ID : null)} class="btn btn-primary ml-2" data-dismiss="modal">Yes</button>
                     </div>
                  </div>
            </div>
         </div>
      </div>
         
         <div class="modal fade location-modal bd-example-modal-lg" id="exampleModalCenter3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
               <div class="modal-content">
                  <div class="modal-header">        
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true"><i class="fa-solid fa-xmark"></i></span>
                     </button>
                  </div>
                  <div class="modal-body pt-5">
                     <h3>Current location of the Employee</h3>
                     {/* Display employee data based on selectedEmployeeId */}
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
            </div>
         </div>
      </section>
  )
}
