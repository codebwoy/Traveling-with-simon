import React from "react";
import BlogPostPreview from "./BlogPostPreview";
import MapComponent from "./MapComponent";

import "./Dashboard.css";

const blogPosts = [
  // Sample blog posts data
  {
    id: 1,
    title: "Exploring Paris",
    visitingDate: "2024-07-01",
    author: { name: "John Doe", image: "/author.jpg" },
    image: "/paris.jpg",
    location: { city: "Paris", country: "France", lat: 48.8566, lng: 2.3522 },
  },
  // Add more blog posts
];

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <BlogPostPreview key={post.id} post={post} />
        ))}
      </div>
      <div className="map">
        <MapComponent blogPosts={blogPosts} />
      </div>
    </div>
  );
}
