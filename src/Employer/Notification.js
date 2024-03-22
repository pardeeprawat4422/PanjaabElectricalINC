import React, { useState, useEffect } from 'react';
import LeftSidebar from './LeftSidebar';
import api from '../api';

export const Notification = () => {
  const [recentnotifications, setRecentNotifications] = useState([]);
  const [earliernotifications, setEarlierNotifications] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchData = async () => {
    try {
      const recentResponse = await api.get(`/notifications/recent`);
      const earlierResponse = await api.get(`/notifications/earlier`);

      const recentNotificationsArray = Object.values(recentResponse.data);
      const earlierNotificationsArray = Object.values(earlierResponse.data);

      setRecentNotifications(recentNotificationsArray);
      setEarlierNotifications(earlierNotificationsArray);

      setErrorMessage('');
      await markread(); // Call markread after setting notifications
    } catch (error) {
      console.error('Error fetching data:', error);
      setErrorMessage('No Record Found.'); // Set error message if there's an error
    }
  };

  useEffect(() => {
    fetchData(); // Call fetchData on component mount
  }, []); // Empty dependency array ensures that this effect runs only once on component mount

  const markread = async () => {
    try {
      const recentResponse = await api.get(`/notifications/mark-read`);
      // Handle the response as needed
    } catch (error) {
      // Handle errors
    }
  };

  const handleClose = async (id) => {
    try {
      await api.delete(`/notifications/delete/${id}`);
      console.log('Notification deleted successfully');
    } catch (error) {
      console.error('Error deleting notification:', error);
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
            <div id="menu-toggle">
              <span>|</span>
              <img src="images/menu_leftn.png" />
            </div>
          </div>
        </div>
        <h2 className="ml-3">Notification</h2>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <h3>Most Recent</h3>
              <div className="col-md-12">
                {recentnotifications.length === 0 ? (
                  <div className="alert alert-success" role="alert">
                  <p>No recent notifications</p>
                  </div>

                ) : (
                  recentnotifications.map(notification => (
                    <div className="alert alert-success" role="alert" key={notification.id}>
                      {notification.Notification_Desc} at {notification.Notification_Date}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <h3>Earlier</h3>
              <div className="col-md-12">
                {earliernotifications.map(notification => (
                  <div className="alert alert-warning alert-dismissible fade show" role="alert" key={notification.id}>
                    {notification.Notification_Desc} at {notification.Notification_Date}
                    <button type="button" className="close" data-dismiss="alert" onClick={() => handleClose(notification.Notification_ID)} aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notification;
