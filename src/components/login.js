import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientID = "629398130306-6dm48rpk39tlnhmca18hup0hj251m00a.apps.googleusercontent.com";

export default function Login({ setUser }) {
    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current User: ", res.profileObj);
        setUser(res.profileObj); // Pass the user data to the parent component
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res:", res);
    }
    
    return(
        <div id="signInButton">
            <GoogleLogin 
                clientId={clientID}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}
