import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const redirectUri = `${window.location.origin}/userdashboard`;
root.render(
<Auth0Provider
   domain="dev-0ifc77v3ahq4514c.us.auth0.com"
    clientId="P0baN0K9yLQQxGZOGejWWjLRCoNrp0fc"
    authorizationParams={{
      redirect_uri:redirectUri
    }}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Auth0Provider>
);


