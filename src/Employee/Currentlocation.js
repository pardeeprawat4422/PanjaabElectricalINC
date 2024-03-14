import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation to access query parameters
import LeftSidebar from './LeftSidebar';

export const Currentlocation = () => {
  // Access the location object to get the search query
  const location = useLocation();
  
  // Parse the query string to get the 'ids' parameter
  const searchParams = new URLSearchParams(location.search);
  const ids = searchParams.get('ids');

  return (
    <section className="employee-dashboard d-flex">
      <LeftSidebar />
      <div className="right-panel" id="right-panel">
        <div className="top-strip px-5 py-2">
          <div className="side-strip">
            <span className="icon-img"> <img src="images/man-icon.png" alt="image"/></span>
            <p className="pb-0 mb-0 pl-3">Philomina</p>
            <div id="menu-toggle" onClick="toggleSidebar">  
              <span>|</span>   
              <img src="images/menu_leftn.png"/>
            </div>
          </div>
        </div>
        <div className="mid-strip current-location-heading px-5 py-3">
          <h3 className="font-weight-medium">SignIn Location</h3>
        </div>
        <div className="current-location px-4">
          <form>
            {/* Display the IDs */}
            <p>IDs: {ids}</p>
          </form>
        </div>
      </div>
    </section>
  );
};
