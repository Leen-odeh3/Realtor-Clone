import React, { useState } from 'react'
import { Link } from "react-router-dom";
import {auth} from './../firebase/Config'
import { createUserWithEmailAndPassword  } from "firebase/auth";

const Signup = () => {
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");

    return (
      <div style={{ backgroundColor: "#def3ea", height: "650px" }}>
        <div
          style={{
            margin: "auto",
            width: "40%",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <h3>Sign Up</h3>
          <form style={{ display: "flex", flexDirection: "column" }}>
            <input
              placeholder="Full Name"
              type="text"
              style={{
                padding: "20px",
                borderRadius: "8px",
                outline: "none",
                border: "none",
                marginTop: "20px",
              }}
            />
            <input  onChange={(e)=>{
                setemail(e.target.value)
              }}
              placeholder="Email Address"
              required
              type="text"
              style={{
                padding: "20px",
                borderRadius: "8px",
                outline: "none",
                border: "none",
                marginTop: "20px",
              }}
            
            />
            <input onChange={(e)=>{
                setpassword(e.target.value)
              }}
              required
              placeholder="Password"
              type="password"
              style={{
                padding: "20px",
                borderRadius: "8px",
                outline: "none",
                border: "none",
                marginTop: "20px",
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
                <Link
                  to="/signin"
                  style={{ color: "red", paddingLeft: "10px" }}
                >
                  Sign In
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
                marginBottom: "20px",
              }}
              onClick={() => {
                createUserWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    // ...
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                  });
              }}
            >
              SIGN Up
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
                marginTop: "20px",
              }}
            >
              CONTINUE WITH GOOGLE
            </button>
          </form>
        </div>
      </div>
    );
}

export default Signup
