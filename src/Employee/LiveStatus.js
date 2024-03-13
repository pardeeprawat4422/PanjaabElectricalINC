import React, { useState } from 'react';
import LeftSidebar from './LeftSidebar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export const LiveStatus = () => {
   const navigate = useNavigate();
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    Claire: false,
    Jessica: false,
    Edward: false,
    Nathan: false,
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
    const allChecked = Object.values(checkboxes).every((checkbox) => checkbox);
    setSelectAllChecked(allChecked);
    setErrorMessage('');
  };

  const handleSelectAll = () => {
    const updatedCheckboxes = {};
    for (const key in checkboxes) {
      updatedCheckboxes[key] = true;
    }
    setCheckboxes(updatedCheckboxes);
    setSelectAllChecked(true);
    setErrorMessage('');
  };

  const handleDeselectAll = () => {
    const updatedCheckboxes = {};
    for (const key in checkboxes) {
      updatedCheckboxes[key] = false;
    }
    setCheckboxes(updatedCheckboxes);
    setSelectAllChecked(false);
    setErrorMessage('');
  };

  const areAnyChecked = Object.values(checkboxes).some((checkbox) => checkbox);

  const handleButtonClick = (action) => {
    setErrorMessage('');

    if (!areAnyChecked) {
      setErrorMessage('Please select at least one Employee to see Location.');
      return;
    }

    // Perform the action here
    if (action === 'signin') {
      navigate("/currentlocation");
    } else if (action === 'joblocation') {
      navigate("/jobLocation");
    }
  };

  return (
    <section className="employee-dashboard d-flex">
      <LeftSidebar />
      <div class="right-panel" id="right-panel">
            <div class="top-strip px-5 py-2">
               <div class="side-strip">
                  <span class="icon-img"> <img src="images/man-icon.png"    
                   alt="image" /></span>
                  <p class="pb-0 mb-0 pl-3">Philomina</p>
                  <div id="menu-toggle" onclick="toggleSidebar">  
                  <span >|</span>   
                  <img src="images/menu_leftn.png" />
                  </div>
            </div>
     </div>
        <div className="mid-strip px-5 py-3 ">
          <h3 className="font-weight-medium mt-5">Please Select employee(s) to see the live location</h3>
        </div>
        <div className="inner-selectbox px-3 py-2">
          <div className="row">
            {Object.entries(checkboxes).map(([name, checked]) => (
              <div className="col-md-3 col-6" key={name}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={name}
                    name={name}
                    checked={checked}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label" htmlFor={name}>
                    {name}
                  </label>
                </div>
              </div>
            ))}
          </div>
          <div className="livelocation-btn px-5 py-4 d-flex mt-4">
            <div className="selectbox-btn mr-4 my-3">
              {selectAllChecked ? (
                <button className="btn btn-primary px-4 py-2" onClick={handleDeselectAll}>Deselect All</button>
              ) : (
                <button className="btn btn-primary px-4 py-2" onClick={handleSelectAll}>Select All</button>
              )}
            </div>
            <div className="selectbox-btn mr-4 my-3">
              <button className="btn btn-primary px-4 py-2" onClick={() => handleButtonClick('signin')}>
                SignIn Location
              </button>
            </div>
            <div className="selectbox-btn mr-4 my-3">
              <button className="btn btn-primary px-4 py-2" onClick={() => handleButtonClick('joblocation')}>
                Job Location
              </button>
            </div>
          </div>
          {errorMessage && <div className="error-message text-danger ml-5 bold">{errorMessage}</div>}
        </div>
      </div>
     
    </section>
  );
};

export default LiveStatus;
