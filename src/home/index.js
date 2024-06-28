import React, { useState, useEffect } from 'react';
import './home.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../landingPage';
import JobPage from '../jobPage';
import NavBar from '../components/navbar';
import AboutUs from '../aboutUs';
import { gapi } from 'gapi-script';
import Login from '../components/login';
import Logout from '../components/logout';

const clientID = "629398130306-6dm48rpk39tlnhmca18hup0hj251m00a.apps.googleusercontent.com";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientID,
        scope: ""
      }).then(() => {
        console.log("GAPI client initialized.");
      }).catch(err => {
        console.error("Error initializing GAPI client: ", err);
      });
    }
    gapi.load('client:auth2', start);
  }, []);

  return (
    <Router>
      <div className='main-body'>
        <NavBar user={user} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/jobPage" element={<JobPage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
        {!user ? <Login setUser={setUser} /> : <Logout setUser={setUser} />}
      </div>
    </Router>
  );
}