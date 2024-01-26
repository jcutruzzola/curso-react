import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZKQLo4xBy76UXlU0M-6RlqPS_s3FK3FY",
  authDomain: "milanostore-e1ace.firebaseapp.com",
  projectId: "milanostore-e1ace",
  storageBucket: "milanostore-e1ace.appspot.com",
  messagingSenderId: "25144938536",
  appId: "1:25144938536:web:75e98bdb79f920eb30e51d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
 
<ChakraProvider>
  
  <App />

</ChakraProvider>

 
)
