import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";
import styled from "styled-components";

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Preview = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  text-align: center;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default function BlogPostPreview() {
  const { blogs } = useContext(BlogContext);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <PreviewContainer>
      {blogs
        .sort((a, b) => new Date(a.visitingDate) - new Date(b.visitingDate))
        .map((blog) => (
          <Preview key={blog.id} onClick={() => handleClick(blog.id)}>
            <h3>{blog.title}</h3>
            <p>{blog.visitingDate}</p>
            <AuthorInfo>
              <img src={blog.author.image} alt={blog.author.name} />
              <span>{blog.author.name}</span>
            </AuthorInfo>
            <ImageContainer>
              <img src={blog.image} alt={blog.title} />
            </ImageContainer>
          </Preview>
        ))}
    </PreviewContainer>
  );
}
