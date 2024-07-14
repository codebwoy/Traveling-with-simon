import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextImage } from "../outlet/imagesSlice";
import "./BlogPostPreview.css";

export default function BlogPostPreview() {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images.images);
  const currentIndex = useSelector((state) => state.images.currentIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(nextImage());
    }, 2000); // blogpost changes image every 2 seconds
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="blog-post-preview">
      {images.map((image, index) => (
        <div
          key={index}
          className={`image-container ${
            index === currentIndex ? "active" : ""
          }`}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
