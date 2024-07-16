// src/components/Dashboard.js
import React from "react";
import Map from "./Map";
import BlogPostPreview from "./BlogPostPreview";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
       <BlogPostPreview />
      <div className="map-container">
       <Map/>
        <div className="map-placeholder">Map goes here</div>
      </div>
     
    </div>
  );
}
