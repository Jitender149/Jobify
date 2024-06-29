import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientID = "629398130306-6dm48rpk39tlnhmca18hup0hj251m00a.apps.googleusercontent.com";

export default function Logout() {
    const onSuccess = () => {
        console.log("LOGOUT SUCCESS!");
        //setUser(null); // Clear the user data when logged out
    }
    
    return(
        <div id="signInButton">
            <GoogleLogout
                clientId={clientID}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}
