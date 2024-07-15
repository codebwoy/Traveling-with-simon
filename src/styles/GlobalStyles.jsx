import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .blog-post-preview, .blog-post-detail {
    padding: 20px;
  }

  .preview-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .preview {
    border: 1px solid #ccc;
    padding: 10px;
    cursor: pointer;
  }

  .image-container {
    text-align: center;
  }

  .author-info {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .author-info img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  .back-button {
    position: absolute;
    top: 10px;
    left: 10px;
  }
`;

export default GlobalStyles;
