import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: 'ap-south-1',
    userPoolId: 'ap-south-1_HByWrbUJm',
    identityPoolId: "ap-south-1:958903a6-06c9-400e-b1eb-eb1ba50472bd",
    userPoolWebClientId: '12g092e7b5d9eu28uftshpv7bg',
    mandatorySignIn: false,
  },
});

const myAppConfig = {
  aws_appsync_graphqlEndpoint:
    'https://axhpyub5ijhknc7y2igajgblbm.appsync-api.ap-south-1.amazonaws.com/graphql',
  aws_appsync_region: 'ap-south-1',
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS'
};

Amplify.configure(myAppConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
