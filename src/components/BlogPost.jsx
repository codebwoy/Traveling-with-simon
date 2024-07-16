import React from "react";
import { useNavigate } from "react-router-dom";
import "./BlogPost.css";

export default function BlogPost({ blog }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${blog.id}`);
  };

  return (
    <div className="preview" onClick={handleClick}>
      <div className="image-container">
        <img src={blog.image} alt={blog.title} />
      </div>
      <h3>{blog.title}</h3>
      <p>{blog.visitingDate}</p>
      <div className="author-info">
        <img src={blog.author.image} alt={blog.author.name} />
        <span>{blog.author.name}</span>
      </div>
    </div>
  );
}
