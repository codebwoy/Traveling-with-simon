import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextImage } from "../store/imagesSlice";
import "./BlogPostPreview.css";

const BlogPostPreview = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images.images);
  const currentIndex = useSelector((state) => state.images.currentIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(nextImage());
    }, 2000); // Change image every 2 seconds
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
};

export default BlogPostPreview;
