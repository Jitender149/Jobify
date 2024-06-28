import React, { useEffect } from 'react'
import './landingPage.css'
import AboutUs from '../aboutUs'
import { gapi } from 'gapi-script';
import Login from '../components/login';

const clientID = "629398130306-6dm48rpk39tlnhmca18hup0hj251m00a.apps.googleusercontent.com";

export default function LandingPage() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientID: clientID,
        scope: ""
      })
    };
    gapi.load('client:auth2', start);
  });
  return (
    <div className='screen-container'>
      <div className='landing-page-body'>
          <div className='jobify-title'>
            <p className='big'>JOBIFY ME</p>
            <p className='small'>a one stop platform for all the job oppurtunities across the globe</p>
          </div>
          <div className='body'>
            <p>Looking for a Job? Well, you're at the right place then.</p>
            <p>You're just a click away from getting JOBIFYed!</p>
          </div>
          <div className='login-btn'><Login /></div>
      </div>
    </div>
  )
}
