import React, { useEffect, useState, useRef } from "react";
import PolaroidGallery from "../../components/PolaroidGallery";
import {
  trad1,
  bgphoto,
  trad2,
  ancient1,
  ancient2,
  ancient3,
  men1,
  men2,
  women1,
  men3,
  women2,
} from "../../assets/assets";
import Card from "../../components/Card";
import AboutUs from "../../components/AboutUs";

const images = [
  { src: trad1, name: "Saluwar", category: "Men", price: "50", buy: "25% off" },
  {
    src: women1,
    name: "Choli",
    category: "Women",
    price: "35",
    buy: "Out of Stock",
  },
  {
    src: men3,
    name: "Daura Surwal",
    category: "Men",
    price: "50",
    buy: "Delivery free",
  },
  {
    src: women2,
    name: "Sari",
    category: "Women",
    price: "70",
    buy: "5% off",
  },
  {
    src: trad1,
    name: "Saluwar",
    category: "Men",
    price: "50",
    buy: "Out of Stock",
  },
  {
    src: women1,
    name: "Choli",
    category: "Women",
    price: "50",
    buy: "Out of Stock",
  },
  {
    src: men3,
    name: "Daura Surwal",
    category: "Men",
    price: "50",
    buy: "Delivery free",
  },
  {
    src: women2,
    name: "Sari",
    category: "Women",
    price: "70",
    buy: "5% off",
  },
];

const pimages = [
  {
    src: ancient1,
  },
  {
    src: ancient2,
  },
  {
    src: ancient3,
  },
  {
    src: trad1,
  },
  {
    src: men1,
  },
  {
    src: men2,
  },
];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isH3Visible, setIsH3Visible] = useState(false);
  const h3Ref = useRef(null);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsH3Visible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(h3Ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <div className="text-primary z-50">
        <PolaroidGallery images={pimages} />
      </div>
      <div className="">
        <div
          ref={h3Ref}
          className={`text-text font-merriweather-light mt-[12rem] text-center text-5xl  font-bold max-sm:text-2xl transition-opacity duration-1000 ${
            isH3Visible ? "opacity-100" : "opacity-0"
          }`}>
          <h3>"SPARKLE YOUR JOURNEY WITH YOUR TRIBE FEEL THEIR PRESENCE"</h3>
        </div>
      </div>
      <div className="text-center mt-4 mb-2">
        <label
          htmlFor="category"
          className="mr-2 text-xl font-merriweather-regular text-primary uppercase">
          Category:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="bg-text text-primary px-2 py-1 rounded hover:bg-buttontext">
          <option value="All">All</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
        </select>
      </div>
      <div className="max-sm:grid-cols-2 grid grid-cols-4 max-md:grid-cols-3 lg:ml-[2rem]">
        {filteredImages.map((image, index) => (
          <Card
            key={index}
            picture={image.src}
            attireName={image.name}
            hiringPrice={image.price}
            buyingOption={image.buy}
          />
        ))}
      </div>
      <AboutUs />
    </div>
  );
};

export default Home;
