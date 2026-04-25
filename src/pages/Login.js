import React from 'react';
import { auth, provider } from "../apis/firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login (){
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      navigate('/customerdetails');
    } catch (error) {
      console.error(error);
    }
  };

  return (
     <div className="login-container">
      <div className="login-card">
        <button className="google-btn" onClick={handleLogin}>
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="google"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

