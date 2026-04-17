import React, { useRef } from "react";
import "./Recommended.css";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Import different images for each product
import product1 from "../../assets/moto1(1).png";
import product2 from "../../assets/moto2(2).png";
import product3 from "../../assets/moto3(3).png";
import product4 from "../../assets/moto4(4).png";
import bgVideo from "../../assets/hero-bg.mp4";

// If you don't have all these images yet, you can use placeholders or a placeholder service
// Alternative: Use a placeholder image service like Unsplash with different images
// import placeholder1 from "https://images.unsplash.com/photo-1594938298603-814a1885a6cd?w=320&h=200&fit=crop";
// etc...

const collectionItems = [
  {
    id: 1,
    name: "Harley Davidson Street 750",
    cost: "60000dh💸",
    label: "Classic",
    stars: 4.8,
    image: product1,
  },
  {
    id: 2,
    name: "BMW SXR 600RR",
    cost: "70000dh",
    label: "Sponrts",
    stars: 4.6,
    image: product2, // Using imported image
  },
  {
    id: 3,
    name: "Honda SH 150i",
    cost: "45999dh💸",
    label: "modern",
    stars: 4.9,
    image: product3, // Using imported image
  },
  {
    id: 4,
    name: "Becane 33",
    cost: "9000dh💸",
    label: "POPULAR",
    stars: 4.7,
    image: product4, // Using imported image
  },
  {
    id: 5,
    name: "Becane 33",
    cost: "9000dh💸",
    label: "TRENDING",
    stars: 4.5,
    image: product2, // Using imported image
  },
  {
    id: 6,
    name: "Becane 33",
    cost: "9000dh💸",
    label: "COMPLETE ",
    stars: 4.8,
    image: product1, // Using imported image
  },
  {
    id: 7,
    name: "Becane 33",
    cost: "9000dh💸",
    label: "GOOD",
    stars: 4.7,
    image: product3, // Using imported image
  },
];

const FeaturedCollection = () => {
  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: -350,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: 350,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
    <div className="recom-container">
      <div className="collection-header">
        <h2 className="collection-title">Featured Inventory</h2>
      </div>

      <div className="collection-wrapper">
        <button className="nav-button nav-prev" onClick={scrollLeft}>
          <ChevronLeft size={24} />
        </button>

        <div className="featured-collection" ref={scrollContainer}>
          {collectionItems.map((item, index) => (
            <article key={item.id} className="product-card elevated-shadow">
              <div className="product-badge">{item.label}</div>

              {/* Using imported images */}
              {item.image ? (
                <img
                  className="product-image"
                  src={item.image}
                  alt={item.name}
                />
              ) : (
                // Fallback to Unsplash placeholder images
                <img
                  className="product-image"
                  src={unsplashImages[index] || unsplashImages[0]}
                  alt={item.name}
                  loading="lazy"
                />
              )}

              <div className="product-details">
                <div className="product-name">{item.name}</div>
                <p className="product-description">{item.details}</p>

                <div className="rating-container">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={16}
                      fill={
                        starIndex < Math.floor(item.stars)
                          ? "#FFD700"
                          : "#E2E8F0"
                      }
                      color={
                        starIndex < Math.floor(item.stars)
                          ? "#FFD700"
                          : "#E2E8F0"
                      }
                      style={{ marginRight: "2px" }}
                    />
                  ))}
                  <span className="rating-value">{item.stars}</span>
                </div>

                <div className="product-price">{item.cost}</div>
              </div>
            </article>
          ))}
        </div>
        <div className="browse-all-wrapper">
          <button className="browse-all">Browse All</button>
        </div>

        <button className="nav-button nav-next" onClick={scrollRight}>
          <ChevronRight size={24} />
        </button>
        <iframe width="747" height="408" src="https://www.youtube.com/embed/PSHTkGHfSVo" title="BMW S1000RR CINEMATIC | 4K" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      </div>
    </>
  );
};

export default FeaturedCollection;
