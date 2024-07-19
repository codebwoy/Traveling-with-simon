import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

import "./BlogPostPreview.css";

export default function BlogPostPreview() {
  const { blogs } = useContext(BlogContext);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="preview-container">
      {blogs
        .sort((a, b) => new Date(a.visitingDate) - new Date(b.visitingDate))
        .map((blog) => (
          <button
            className="preview"
            key={blog.id}
            onClick={() => handleClick(blog.id)}
          >
            <h4>{blog.title}</h4>
            <p>{blog.visitingDate}</p>
            <div className="author-info">
              <img src={blog.author.image} alt={blog.author.name} />
              <span>{blog.author.name}</span>
            </div>
            <div className="image-container">
              <img src={blog.image} alt={blog.title} />
            </div>
          </button>
        ))}
    </div>
  );
}
