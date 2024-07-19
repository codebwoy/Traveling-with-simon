import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
// Create a context for the blog data
export const BlogContext = createContext();

// Define the BlogProvider component to manage and provide blog data
export const BlogProvider = ({ children }) => {
  // Initialize the state with a list of blog posts
  const [blogs] = useState([
    {
      id: 1,
      title: "The Enchanted Canals of Copenhagen",
      visitingDate: "2024-05-08",
      author: { name: "Jane Smith", image: "/blonde.jpg" },
      image: "/copenhagen.jpg",
      text: "Lorem ipsum...",
      location: {
        city: "Copenhagen",
        country: "Denmark",
        lat: 55.6761,
        lng: 12.5683,
      },
    },
    {
      id: 2,
      title: "Vienna: A Symphony of Elegance and Culture",
      visitingDate: "2024-02-05",
      author: { name: "Eve White", image: "/deagreez.jpg" },
      image: "/vienna.jpg",
      text: "Lorem ipsum...",
      location: {
        city: "Vienna",
        country: "Austria",
        lat: 48.2082,
        lng: 16.3738,
      },
    },
    {
      id: 3,
      title: "Paris: The Timeless Romance",
      visitingDate: "2024-06-09",
      author: { name: "Bob Brown", image: "/john.jpg" },
      image: "/paris.jpg",
      text: "Lorem ipsum...",
      location: { city: "Paris", country: "France", lat: 48.8566, lng: 2.3522 },
    },
    {
      id: 4,
      title: "Berlin: Echoes of History and Modern Marvels",
      visitingDate: "2024-03-02",
      author: { name: "Christian Schwartz", image: "/mann.jpg" },
      image: "/germany.jpg",
      text: "Lorem ipsum...",
      location: { city: "Berlin", country: "Germany", lat: 52.52, lng: 13.405 },
    },
    {
      id: 5,
      title: "Barcelona: A Tapestry of Art and Architecture",
      visitingDate: "2024-04-01",
      author: { name: "Janny Doe", image: "/portra.jpg" },
      image: "/barcelona.jpg",
      text: "Lorem ipsum...",
      location: {
        city: "Barcelona",
        country: "Spain",
        lat: 41.3851,
        lng: 2.1734,
      },
    },
    {
      id: 6,
      title: "Rome: The Eternal City of Legends",
      visitingDate: "2024-01-01",
      author: { name: "Charlie Davis", image: "/retro.jpg" },
      image: "/rome.jpg",
      text: "Lorem ipsum...",
      location: { city: "Rome", country: "Italy", lat: 41.9028, lng: 12.4964 },
    },
  ]);

  // Provide the blogs state to child components
  return (
    <BlogContext.Provider value={{ blogs }}>{children}</BlogContext.Provider>
  );
};
// Define PropTypes for BlogProvider component
BlogProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
