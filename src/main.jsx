import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-5vnkaoeyvp4qqpzk.us.auth0.com"
    clientId="HGfNYP8W4ONYzrTvOklN0xjNpwAVnV1x"
    authorizationParams={{
      redirect_uri: window.location.origin+"/callback"
    }}
  >
    <App />
    </Auth0Provider>,
  </React.StrictMode>,
)
