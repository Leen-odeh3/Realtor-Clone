import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './../firebase/Config'


const Signin = () => {
const Navigate =useNavigate();
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");

  return (
    <div style={{ backgroundColor: "#def3ea", height: "590px" }}>
      <div
        style={{
          margin: "auto",
          width: "40%",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h3>Sign In</h3>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <input
            placeholder="Email Address"
            type="email"
            style={{
              padding: "20px",
              borderRadius: "8px",
              outline: "none",
              border: "none",
              marginTop: "20px",
            }}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <input
            placeholder="Password"
            type="text"
            style={{
              padding: "20px",
              borderRadius: "8px",
              outline: "none",
              border: "none",
              marginTop: "20px",
            }}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p style={{ fontSize: "20px", margin: "30px" }}>
              Don't have an account?
              <Link to="/signup" style={{ color: "red", paddingLeft: "10px" }}>
                Register
              </Link>
            </p>
            <Link to="/Forgotpassword?" style={{ color: "#007aff" }}>
              Forgot password?
            </Link>
          </div>
          <button
            style={{
              backgroundColor: "#007aff",
              color: "white",
              borderRadius: "7px",
              border: "none",
              padding: "20px",
              fontWeight: "600",
              cursor: "pointer",
              marginBottom: "30px",
            }}
            onClick={(e) => {
              

              e.preventDefault();
              
Navigate("/home");

              signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                });
            }}
          >
            SIGN IN
          </button>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                height: "1px",
                width: "250px",
                backgroundColor: "#bcbcbc",
              }}
            ></span>
            OR
            <span
              style={{
                height: "1px",
                width: "250px",
                backgroundColor: "#bcbcbc",
              }}
            ></span>
          </div>
          <button
            style={{
              backgroundColor: "#B91C1C",
              color: "white",
              borderRadius: "7px",
              border: "none",
              padding: "20px",
              fontWeight: "600",
              cursor: "pointer",
              marginTop: "30px",
            }}
          >
            CONTINUE WITH GOOGLE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
