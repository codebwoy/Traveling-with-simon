import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import NewPost from "./components/NewPost";
import Login from "./components/Login";
import BlogPostPreview from "./components/BlogPostPreview";
import Map from "./components/Map";
import Headbar from "./components/Headbar.jsx";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Render Navbar component */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/new-post" element={<NewPost />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <BlogPostPreview />
        <div className="App">
          <Headbar />
          <Map />
        </div>
      </div>
    </Router>
  );
}
