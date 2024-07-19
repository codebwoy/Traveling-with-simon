import React from "react";
import { useParams, Link } from "react-router-dom";
import MapComponent from "./MapComponent";
import "./BlogPostDetail.css";

const blogPosts = [
  // Same blog posts data as in Dashboard
  {
    id: 1,
    title: "The Enchanted Canals of Copenhagen",
    visitingDate: "2024-05-08",
    author: { name: "Jane Smith", image: "/blonde.jpg" },
    image: "/copenhagen.jpg",
    text: "Lorem ipsum...",
    location: { city: "Copenhagen", country: "Denmark" },
  },
  {
    id: 2,
    title: "Vienna: A Symphony of Elegance and Culture",
    visitingDate: "2024-02-05",
    author: { name: "Eve White", image: "/deagreez.jpg" },
    image: "/vienna.jpg",
    text: "Lorem ipsum...",
    location: { city: "Vienna", country: "Austria" },
  },
  {
    id: 3,
    title: "Paris: The Timeless Romance",
    visitingDate: "2024-06-09",
    author: { name: "Bob Brown", image: "/john.jpg" },
    image: "/paris.jpg",
    text: "Lorem ipsum...",
    location: { city: "Paris", country: "France" },
  },
  {
    id: 4,
    title: "Berlin: Echoes of History and Modern Marvels",
    visitingDate: "2024-03-02",
    author: { name: "Christian Schwartz", image: "/mann.jpg" },
    image: "/germany.jpg",
    text: "Lorem ipsum...",
    location: { city: "Berlin", country: "Germany" },
  },
  {
    id: 5,
    title: "Barcelona: A Tapestry of Art and Architecture",
    visitingDate: "2024-04-01",
    author: { name: "Janny Doe", image: "/portra.jpg" },
    image: "/barcelona.jpg",
    text: "Lorem ipsum...",
    location: { city: "Barcelona", country: "Spain" },
  },
  {
    id: 6,
    title: "Rome: The Eternal City of Legends",
    visitingDate: "2024-01-01",
    author: { name: "Charlie Davis", image: "/retro.jpg" },
    image: "/rome.jpg",
    text: "Lorem ipsum...",
    location: { city: "Rome", country: "Italy" },
  },
];

export default function BlogPostDetail() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  return (
    <div className="blog-post-detail">
      <Link to="/" className="back-button">
        Back
      </Link>
      <div className="blog-post-content">
        <h1>{post.title}</h1>
        <p>{post.visitingDate}</p>
        <p>{post.author.name}</p>
        <img src={post.image} alt={post.title} />
        <p>{post.text}</p>
        <p>
          {post.location.city}, {post.location.country}
        </p>
      </div>
      <div className="blog-post-map">
        <MapComponent blogPosts={[post]} />
      </div>
    </div>
  );
}
