import React, { useContext } from "react";
import { BlogContext } from "../contexts/BlogContext";

export default function SomeComponent() {
  const { blogs } = useContext(BlogContext);

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.visitingDate}</p>
        </div>
      ))}
    </div>
  );
}
