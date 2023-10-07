import React from 'react'
import { Link } from "react-router-dom";


const Signup = () => {
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
              <input
                placeholder="Email Address"
                type="text"
                style={{
                  padding: "20px",
                  borderRadius: "8px",
                  outline: "none",
                  border: "none",
                  marginTop: "20px",
                }}
              />
              <input
                placeholder="Password"
                type="email"
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
                  <Link to="/signin" style={{ color: "red", paddingLeft: "10px" }}>
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
                  marginBottom: "30px",
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
                  marginTop: "30px",
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
