import React from "react";
import "./Hero.css";
import bgVideo from "../../assets/hero-bg.mp4";

const Hero = () => {
  return (
    <section className="hero">
      <video
        className="hero-video"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="hero-content">
        <div className="hero-container">
          <h1>Find Your Adventure</h1>
          <p>
            Explore our curated selection of health and wellness products
            designed to enhance your lifestyle.
          </p>
          <button class="button">
            Apply Now
            <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
              <path
                clip-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="bottom-hero"></div>
    </section>
  );
};

export default Hero;
