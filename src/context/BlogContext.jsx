import React, { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Blog Post 1",
      visitingDate: "2024-07-01",
      author: { name: "Author 1", image: "public/blonde.jpg" },
      image: "public/copenhagen.jpg",
    },
    {
      id: 2,
      title: "Blog Post 2",
      visitingDate: "2024-07-05",
      author: { name: "Author 2", image: "public/deagreez.jpg" },
      image: "public/vienna.jpg",
    },
    {
      id: 3,
      title: "Blog Post 3",
      visitingDate: "2024-07-01",
      author: { name: "Author 3", image: "public/john.jpg" },
      image: "public/paris.jpg",
    },
    {
      id: 4,
      title: "Blog Post 4",
      visitingDate: "2024-07-01",
      author: { name: "Author 4", image: "public/mann.jpg" },
      image: "public/germany.jpg",
    },
    {
      id: 5,
      title: "Blog Post 5",
      visitingDate: "2024-07-01",
      author: { name: "Author 5", image: "public/portra.jpg" },
      image: "public/barcelona.jpg",
    },
    {
      id: 6,
      title: "Blog Post 6",
      visitingDate: "2024-07-01",
      author: { name: "Author 6", image: "public/retro.jpg" },
      image: "public/rome.jpg",
    },
  ]);

  return (
    <BlogContext.Provider value={{ blogs }}>{children}</BlogContext.Provider>
  );
};
