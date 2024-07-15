import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import NewPost from "./components/NewPost";
import Login from "./components/Login";
import BlogPostPreview from "./components/BlogPostPreview";
import BlogPostDetail from "./components/BlogPostDetail";
import Map from "./components/Map";
import Headbar from "./components/Headbar";
import { BlogProvider } from "./context/BlogContext";
import GlobalStyles from "./styles/GlobalStyles";
import "./App.css";

function App() {
  return (
    <BlogProvider>
      <GlobalStyles />
      <Router>
        <div>
          <Navbar /> {/* Render Navbar component */}
          <Routes>
            <Route path="/" element={<BlogPostPreview />} />
            <Route path="/post/:id" element={<BlogPostDetail />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/new-post" element={<NewPost />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <div className="App">
            <Headbar />
            <Map />
          </div>
        </div>
      </Router>
    </BlogProvider>
  );
}

export default App;
