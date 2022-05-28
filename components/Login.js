import React from 'react';
import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
};

export default function Login() {
  return (
    <div>
      <h1>Login please</h1>

      <GoogleLogin
        clientId='214015961785-plma5hibritagflmrtnh58l76j58bi6f.apps.googleusercontent.com'
        buttonText='Login'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
}
