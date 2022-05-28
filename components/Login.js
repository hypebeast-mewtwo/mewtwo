import React from 'react';
import { GoogleLogin } from 'react-google-login';
import userdb from './userdb.json';

const clientId = userdb.GOOGLE_CLIENT_ID;

// const responseGoogle = (response) => {
//   console.log(response);
// };

export default function Login() {
  const onSuccess = (res) => {
    console.log('[login success] currentUser:', res.profileObj);
  };

  const onFailure = (res) => {
    console.log('[login failed] res:', res);
  };

  return (
    <div>
      <h1>Login please</h1>

      <GoogleLogin
        clientId={clientId}
        buttonText='Login'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}
