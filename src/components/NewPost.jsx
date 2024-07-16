import React, { useState } from "react";
import updatedmap from "./UpdatedMap";

const initialPosts = [
  // Initial posts data
  // ...
];

export default function App() {
  const [posts, setPosts] = useState(initialPosts);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <updatedmap posts={posts} />
      <NewPostForm addPost={addPost} />
    </div>
  );
}

function NewPostForm({ addPost }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    lng: "",
    lat: "",
    title: "",
    date: "",
    authorName: "",
    authorImage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: formData.id,
      name: formData.name,
      lng: parseFloat(formData.lng),
      lat: parseFloat(formData.lat),
      title: formData.title,
      date: formData.date,
      authorName: formData.authorName,
      authorImage: formData.authorImage,
    };
    addPost(newPost);
    setFormData({
      id: "",
      name: "",
      lng: "",
      lat: "",
      title: "",
      date: "",
      authorName: "",
      authorImage: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        placeholder="ID"
        value={formData.id}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lng"
        placeholder="Longitude"
        value={formData.lng}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lat"
        placeholder="Latitude"
        value={formData.lat}
        onChange={handleChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="date"
        placeholder="Date"
        value={formData.date}
        onChange={handleChange}
      />
      <input
        type="text"
        name="authorName"
        placeholder="Author Name"
        value={formData.authorName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="authorImage"
        placeholder="Author Image URL"
        value={formData.authorImage}
        onChange={handleChange}
      />
      <button type="submit">Add Post</button>
    </form>
  );
}
