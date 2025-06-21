import React from "react";

const OptimizedImage = ({
  basePath, // ex: "/images/massage"
  alt = "",
  className = "",
  loading = "lazy",
  type = "webp",
  fallbackExtension = "jpg", // ou "png"
  sizes = "(max-width: 768px) 100vw, 50vw",
}) => {
  const srcSet = [480, 768, 1280, 1920]
    .map((size) => `${basePath}-${size}.${type} ${size}w`)
    .join(", ");

  const fallbackSrc = `${basePath}.${fallbackExtension}`;

  return (
    <picture>
      <source srcSet={srcSet} type={`image/${type}`} sizes={sizes} />
      <img
        src={fallbackSrc}
        alt={alt}
        loading={loading}
        className={className}
      />
    </picture>
  );
};

export default OptimizedImage;
