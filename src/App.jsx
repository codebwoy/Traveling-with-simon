import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import main from "./main";
import Dashboard from "./components/Dashboard";
import BlogPostDetail from "./components/BlogPostDetail";
import Contact from "./components/Contact";
import SomeComponent from "./components/SomeComponent";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app">
        <main />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/post/:id" element={<BlogPostDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <h1>hello, world!</h1>
        <SomeComponent />
      </div>
    </Router>
  );
}
