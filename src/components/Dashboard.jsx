// src/components/Dashboard.js
import React from "react";
import Map from "./Map";

function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1, padding: "20px" }}>
        <h2>Dashboard</h2>
        <p>Sample overview of all blog posts</p>
      </div>
      <div style={{ flex: 1, padding: "20px" }}>
        <Map />
      </div>
    </div>
  );
}

export default Dashboard;
