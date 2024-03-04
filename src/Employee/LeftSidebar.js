import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';

 const LeftSidebar = () => {
   const navigate = useNavigate();    
   const location = useLocation();
   const [step, setStep] = useState(1);

  useEffect(() => {
    // Determine the step based on the current location
    switch(location.pathname) {
      case '/':
        setStep(1);
        break;
	   case '/employeelist':
        setStep(2);
        break;
      case '/employeejobs':
        setStep(3);
        break;
      case '/employeereports':
        setStep(4);
        break;
	   case '/notification':
        setStep(5);
        break;
        case '/livestatus':
        setStep(6);
        break;
      default:
        setStep(0);
    }
  }, [location.pathname]);

   const navigateToStep = (path) => {
      navigate(path);
   };

  return (
    
   <div class="left-panel py-5" id="sidebar">
   <div class="logo text-center">
      <a href="/employeelist">
      <img src="images/punjab-electrical-inc-01.png" alt="logo" />
      </a>
   </div>
   <ul class="pl-0 ">
      <li className={`mt-4 ${step === 2 ? 'active' : ''}`}>
      <a className="btn" onClick={() => navigateToStep('/employeelist')}>
         <div class="leftside-img">
               <img src="images/employee.png" alt="image" />
            </div>
         <span>EMPLOYEES</span></a>
      </li>
      <li className={`my-1 ${step === 3 ? 'active' : ''}`}>
         <a className="btn" onClick={() => navigateToStep('/employeejobs')}>
            <div class="leftside-img">
               <img src="images/jobs.png" alt="image" />
            </div>
            <span>JOBS</span>
         </a>
      </li>
      <li className={`my-1 ${step === 4 ? 'active' : ''}`}>
      <a className="btn" onClick={() => navigateToStep('/employeereports')}>
            <div class="leftside-img">
               <img src="images/Reports.png" alt="image" />
            </div>
            <span>REPORTS</span>
         </a>
      </li>
      <li class={`my-1 ${step === 5 ? 'active' : ''}`}>
	    <a className="btn" onClick={() => navigateToStep('/notification')}>
            <div class="leftside-img">
               <img src="images/notification.png" alt="image" />
            </div>
            <span>NOTIFICATION</span>
         </a>
      </li>
      <li className={`my-1 ${step === 6 ? 'active' : ''}`}>
      <a className="btn" onClick={() => navigateToStep('/livestatus')}>
            <div class="leftside-img">
               <img src="images/livestatus.png" alt="image" />
            </div>
            <span>LIVE STATUS</span>
         </a>
      </li>
      <li class="my-1">
         <a href="/" class="left-list-link">
            <div class="leftside-img">
               <img src="images/logout.png" alt="image" />
            </div>
            <span>LOGOUT</span>
         </a>
      </li>
   </ul>
</div>
  );
};

export default LeftSidebar;