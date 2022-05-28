import React from 'react';
import { GoogleLogout } from 'react-google-login';
import userdb from './userdb.json';

const clientId = userdb.GOOGLE_CLIENT_ID;

export default function Logout() {
  const onSuccess = () => {
    alert('logout successful');
  };
  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText='Logout'
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}
