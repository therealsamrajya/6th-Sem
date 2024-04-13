import React from "react";

const PolaroidGallery = ({ images, imageSize = 300 }) => {
  const positions = [
    { left: 20, top: 0, rotate: 5 },
    { left: 50, top: 0, rotate: -3 },
    { left: 30, top: 0, rotate: 2 },
    { left: 43, top: 60, rotate: 8 },
    { left: 70, top: 30, rotate: -7 },
    { left: 10, top: 30, rotate: -7 },
    // Add more positions as needed
  ];

  return (
    <div className="relative h-[500px]">
      {images.map((image, index) => {
        const position = positions[index % positions.length] || positions[0];

        return (
          <div
            key={index}
            className="absolute bg-white p-2.5 shadow-md transition-transform duration-300 hover:scale-110 hover:rotate-0 hover:z-10  ease-in-out delay-150  "
            style={{
              transform: `rotate(${position.rotate}deg)`,
              left: `${position.left}%`,
              top: `${position.top}%`,
            }}>
            <img
              src={image.src}
              alt={image.name}
              className="w-full h-auto"
              style={{ maxWidth: `${imageSize}px` }}
            />
            <div className="text-center text-sm mt-1">{image.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PolaroidGallery;
