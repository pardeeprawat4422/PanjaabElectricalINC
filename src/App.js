import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import { Login } from './Auth/Login';
import  LeftSidebar from './Employer/LeftSidebar';
import { EmployeeDashboard } from './Employer/EmployeeDashboard';
import { EmployeeJobs } from './Employer/EmployeeJobs';
import { AddnewEmployee } from './Employer/AddnewEmployee';
import { EmployeeReports } from './Employer/EmployeeReports';
import  EmployeePersonalReports  from './Employee/EmployeePersonalReports';
import { LiveStatus }  from './Employer/LiveStatus';
import { Currentlocation  }  from './Employer/Currentlocation';
import { JobLocation }  from './Employer/JobLocation';
import { Notification }  from './Employer/Notification';
import { AddnewJob } from './Employer/AddnewJob';
import { EditEmploye } from './Employer/EditEmploye';
import { Emplyoyeejoblist } from './Employer/Emplyoyeejoblist';
import { WorkerList } from './Employer/WorkerList';
import { EditJobEmpoyee } from './Employer/EditJobEmpoyee';
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
          <Route path="/employerreports" element={<EmployeeReports />} />
          <Route path="/livestatus" element={<LiveStatus />} />
          <Route path="/currentlocation" element={<Currentlocation />} />
          <Route path="/jobLocation" element={<JobLocation />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/addnewJob" element={<AddnewJob />} />
          <Route path="/editemploye/:id" element={<EditEmploye />} />
          <Route path="/emplyoyeejoblist/:id" element={<Emplyoyeejoblist />} />
          <Route path="/workerlist/:id" element={<WorkerList />} />
          <Route path="/editjobemployee/:id" element={<EditJobEmpoyee />} />
        
          <Route path="/employeepersonalreports/:id" element={<EmployeePersonalReports />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
