import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Employee'); // Default to Employee
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email) {
      setEmailError('Please enter your email');
      return;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Please enter your password');
      return;
    } else {
      setPasswordError('');
    }

    try {
      const response = await api.post('/login', {
        email,
        password,
        role
      });
      
      // Assuming your backend returns a user object with a token upon successful login
      const { EmpL_ID, Emp_ID } = response.data;
      // You can save the user ID or token in local storage for authentication
      // Example: localStorage.setItem('token', token);
      const id = response.data.Emp_ID;
      console.log(id);
      // Redirect based on the user role
      if (role === 'Employer') {
        navigate("/employeelist");
      } else {
        navigate("/employeepersonalreports/"+id);
      }
    } catch (error) {
      // Handle login error
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <section className="main-wrapper">
        <div className="container">
          <div className="loginpage-panel">
            <div className="row">
              <div className="col-md-6">
                <div className="form-login">
                  <div className="form-logo text-center">
                    <img src="images/punjab-electrical.png" alt="logo" />
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="form-login-panel pt-4">
                      <h2>Welcome Back</h2>
                      <p>Welcome back! Please enter your details.</p>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">User</label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError && <div className="text-danger">{emailError}</div>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        {passwordError && <div className="text-danger">{passwordError}</div>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Role</label>
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                        >
                          <option value="Employee">Employee</option>
                          <option value="Employer">Employer</option>
                        </select>
                      </div>
                      <div className="form-group signup-btn">
                        <input
                          type="submit"
                          className="btn btn-primary w-100 py-2 my-3"
                          value="Sign in"
                        />
                        {error && <div className="text-danger">{error}</div>}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <div className="login-form-right">
                  <img src="images/punjab-electrical-inc.png" alt="right-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
