import { useEffect, useState } from "react";

const Imagechanger = () => {
  const images = [
    "https://www.movieposters.com/cdn/shop/files/bad_guys_two_240x360_crop_center.progressive.jpg?v=1733262276",
    "https://www.movieposters.com/cdn/shop/files/scan_91f05a42-4cc3-4e16-ac81-690bbcea8d63_240x360_crop_center.progressive.jpg?v=1736800276",
    "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/darkknight.building.24x36_20e90057-f673-4cc3-9ce7-7b0d3eeb7d83_500x749.jpg?v=1707491191",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{ width: "500px", height: "500px", borderRadius: "10px" }}
      />
    </div>
  );
};

export default Imagechanger;
