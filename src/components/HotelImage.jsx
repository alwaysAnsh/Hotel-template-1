import { useState } from "react";
import { IconArch } from "./Icons.jsx";

export default function HotelImage({
  src,
  srcSet,
  sizes = "100vw",
  mobileSrc,
  mobileSrcSet,
  width,
  height,
  alt,
  className = "",
  pictureClassName = "",
  position = "center",
  priority = false,
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    if (!alt) {
      return <div className={`bg-[#e7d3b4] ${className}`} aria-hidden="true" />;
    }

    return (
      <div
        className={`grid place-items-center bg-[#e7d3b4] text-olive ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="px-4 text-center">
          <IconArch className="mx-auto h-8 w-8" />
          <p className="mt-2 text-xs tracking-wide">Photograph unavailable</p>
        </div>
      </div>
    );
  }

  const image = (
    <img
      src={src}
      srcSet={srcSet || undefined}
      sizes={srcSet || mobileSrcSet ? sizes : undefined}
      width={width || undefined}
      height={height || undefined}
      alt={alt}
      className={className}
      style={position ? { objectPosition: position } : undefined}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );

  if (!mobileSrc && !mobileSrcSet) return image;

  return (
    <picture className={pictureClassName}>
      <source media="(max-width: 767px)" srcSet={mobileSrcSet || mobileSrc} sizes={sizes} />
      {image}
    </picture>
  );
}
