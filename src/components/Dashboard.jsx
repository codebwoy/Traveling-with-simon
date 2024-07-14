// src/components/Dashboard.js
import React from "react";
import Map from "./Map";
import BlogPostPreview from "./BlogPostPreview";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-left">
       
        <div className="blogpost-grid">
          <BlogPostPreview className="blogpost-item" />
          
        </div>
      </div>
      <div className="dashboard-right">
        <Map className="map-size" />
      </div>
    </div>
  );
}
