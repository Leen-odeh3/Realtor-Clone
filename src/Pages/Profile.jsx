import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "#def3ea", height: "590px" }}>
      <div
        style={{
          margin: "auto",
          width: "50%",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h3>My Profile</h3>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <input
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
              Do want to change your name?{" "}
              <Link style={{ color: "red" }}>Edit</Link>
            </p>
            <Link to="/Signout" style={{ color: "#007aff" }}>
              Sign out
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
            }}
            onClick={() => {
              navigate("/create-listing");
            }}
          >
            SELL OR RENT YOUR HOME
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
