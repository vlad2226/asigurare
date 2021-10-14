import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// const firebaseApp = initializeApp({});

// const firebaseConfig = {
//   apiKey: "AIzaSyAoqGyxoVfAq047AxoY-sIe6-xd250B9RQ",
//   authDomain: "asigurare-e01af.firebaseapp.com",
//   projectId: "asigurare-e01af",
//   storageBucket: "asigurare-e01af.appspot.com",
//   messagingSenderId: "666804645243",
//   appId: "1:666804645243:web:8bd391ae718f4d0a6b21de",
//   measurementId: "G-5Q6334RNMR",
// };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
