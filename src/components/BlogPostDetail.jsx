import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
`;

export default function BlogPostDetail() {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);
  const navigate = useNavigate();

  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <p>Blog post not found</p>;
  }

  return (
    <div className="blog-post-detail">
      <button onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <h1>{blog.title}</h1>
      <p>{blog.visitingDate}</p>
      <div className="author-info">
        <img src={blog.author.image} alt={blog.author.name} />
        <span>{blog.author.name}</span>
      </div>
      <div className="image-container">
        <img src={blog.image} alt={blog.title} />
      </div>
      <p>{blog.text}</p>
      <p>
        Location: {blog.location.city}, {blog.location.country}
      </p>
    </div>
  );
}
