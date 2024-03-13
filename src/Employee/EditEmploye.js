import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import api from '../api';
import LeftSidebar from './LeftSidebar';

export const EditEmploye = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const [submitted, setSubmitted] = useState(false);
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [address, setAddress] = useState('');
   const [errors, setErrors] = useState({});

   useEffect(() => {
      // Fetch employee details when component mounts
      const fetchData = async () => {
         try {
            const response = await api.get(`/single-employee/${id}`);
            const { data } = response;
            setName(data.employee.Emp_Name);
            setEmail(data.employee.Emp_Email);
            setPhone(data.employee.Emp_Phone);
            setAddress(data.employee.Emp_Address);
         } catch (error) {
            console.error('Error fetching employee details:', error);
         }
      };
      fetchData();
   }, [id]);

   
   const handleSubmit = async (e) => {
      e.preventDefault();
      const errors = {};
      if (!name.trim()) {
         errors.name = 'Name is required';
      }
      if (!email.trim()) {
         errors.email = 'Email is required';
      } else if (!/^\S+@\S+\.\S+$/.test(email)) {
         errors.email = 'Invalid email address';
      }
      if (!phone.trim()) {
         errors.phone = 'Phone is required';
      }
      if (!address.trim()) {
         errors.address = 'Address is required';
      }
      if (Object.keys(errors).length === 0) {
         try {
            await api.put(`/employees/${id}`, {
               Emp_Name: name,
               Emp_Phone: phone,
               Emp_Email: email,
               Emp_Address: address
            });
            console.log('Employee details updated successfully');
            setSubmitted(true);
            setTimeout(() => {
               navigate('/employeelist');
            }, 3000);
         } catch (error) {
            console.error('Error updating employee details:', error);
         }
      } else {
         setErrors(errors);
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
                     <img src="images/menu_leftn.png" />
                  </div>
               </div>
            </div>
            <div className="addnew-employee h-100">
               <div className="upper-addnew-heading px-5 d-flex pt-3">
                  <a href="/employeelist"> <i className="fa-solid fa-arrow-left"></i></a>
                  <h2>Edit the details of Employee</h2>
               </div>
               <div className="addemployee-form form-login-panel pt-4">
                  {submitted && (
                     <div className="alert alert-success" role="alert">
                        Employee Details updated successfully.
                     </div>
                  )}
                  <form onSubmit={handleSubmit}>
                     <div className="form-row pt-4">
                        <div className="form-group col-md-5 px-3">
                           <label htmlFor="exampleInputtext">Name</label>
                           <input
  type="text"
  className="form-control"
  id="exampleInputtext"
  value={name} // Use the state variable directly here
  onChange={(e) => setName(e.target.value)}
/>
                           {errors.name && <div className="text-danger">{errors.name}</div>}
                        </div>
                        <div className="form-group col-md-5 px-3">
                           <label htmlFor="exampleInputtext">Email</label>
                           <input
                              type="text"
                              className="form-control"
                              id="exampleInputtext"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                           />
                           {errors.email && <div className="text-danger">{errors.email}</div>}
                        </div>
                        <div className="form-group col-md-5 px-3">
                           <label htmlFor="exampleInputtext">Phone</label>
                           <input
                              type="text"
                              className="form-control"
                              id="exampleInputtext"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                           />
                           {errors.phone && <div className="text-danger">{errors.phone}</div>}
                        </div>
                        <div className="form-group col-md-5 px-3">
                           <label htmlFor="exampleInputtext">Address</label>
                           <input
                              type="text"
                              className="form-control"
                              id="exampleInputtext"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                           />
                           {errors.address && <div className="text-danger">{errors.address}</div>}
                        </div>
                        <div className="form-group submitbtn col-md-12">
                           <button type="submit" className="btn btn-primary py-2 my-3">
                              Submit
                           </button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
};
