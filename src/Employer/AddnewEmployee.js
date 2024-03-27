import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import api from '../api'; 
import LeftSidebar from './LeftSidebar';

export const AddnewEmployee = () => {
   const navigate = useNavigate();
 const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState({});

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
        const response = await api.post('/addemployee', {
          Emp_Name: name,
          Emp_Phone: phone,
          Emp_Email: email,
          Emp_Address: address
        });
        console.log(response.data.message);
        setSubmitted(true);
        setTimeout(() => {
          navigate('/employeelist');
        }, 3000);
      } catch (error) {
        console.error('Error adding employee:', error);
      }
    }
     else {
      setErrors(errors);
    
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
               <img src="images/menu_leftn.png" />
               </div>
            </div>
         </div>
        <div className="addnew-employee h-100">
         <div className="upper-addnew-heading px-5 d-flex pt-3">
               <a href="/employeelist"> <i className="fa-solid fa-arrow-left"></i></a> {/* Link corrected to employeelist */}
               <h2>Add New Employee</h2>
            </div>
          <div className="addemployee-form form-login-panel pt-4">
              {/* Render success message conditionally */}
          {submitted && (
            <div className="alert alert-success" role="alert">
              Employee added successfully. 
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
                    placeholder="Name"
                    value={name}
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
                    placeholder="Email"
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
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {errors.phone && <div className="text-danger">{errors.phone}</div>}
                </div>

                <div className="form-group col-md-5 px-3">
                  <label htmlFor="exampleInputtext">Address</label>
                  <input
                    type="textarea"
                    className="form-control"
                    id="exampleInputtext"
                    placeholder="Address"
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
