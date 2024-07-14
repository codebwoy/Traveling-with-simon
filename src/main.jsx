// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import BlogPostPreview from "./components/BlogPostPreview";
import "./index.css";
import App from "./App";
import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  <Provider store={store}>
    <BlogPostPreview />
  </Provider>,
  document.getElementById("root")
);
