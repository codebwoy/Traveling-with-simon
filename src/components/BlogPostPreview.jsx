import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import BlogPost from "./BlogPost";
import "./BlogPostPreview.css";

export default function BlogPostPreview() {
  const { blogs } = useContext(BlogContext);

  return (
    <div className="preview-grid">
      {blogs
        .sort((a, b) => new Date(a.visitingDate) - new Date(b.visitingDate))
        .map((blog) => (
          <BlogPost key={blog.id} blog={blog} />
        ))}
    </div>
  );
}
