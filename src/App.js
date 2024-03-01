import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import { Login } from './Auth/Login';
import  LeftSidebar from './Employee/LeftSidebar';
import { EmployeeDashboard } from './Employee/EmployeeDashboard';
import { EmployeeJobs } from './Employee/EmployeeJobs';
import { AddnewEmployee } from './Employee/AddnewEmployee';
import { EmployeeReports } from './Employee/EmployeeReports';
import  EmployerReports  from './Employer/EmployerReports';
import { LiveStatus }  from './Employee/LiveStatus';
import { Currentlocation }  from './Employee/Currentlocation';
import { JobLocation }  from './Employee/JobLocation';
import { Notification }  from './Employee/Notification';
import { AddnewJob } from './Employee/AddnewJob';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/leftsidebar" element={<LeftSidebar />} />
          <Route path="/employeelist" element={<EmployeeDashboard />} />
          <Route path="/employeejobs" element={<EmployeeJobs />} />
          <Route path="/addnewemployee" element={<AddnewEmployee />} />
          <Route path="/employeereports" element={<EmployeeReports />} />
          <Route path="/employerreports" element={<EmployerReports />} />
          <Route path="/livestatus" element={<LiveStatus />} />
          <Route path="/currentlocation" element={<Currentlocation />} />
          <Route path="/jobLocation" element={<JobLocation />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/addnewJob" element={<AddnewJob />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
