import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import Title from "../../components/title/Title";
import Collection from "../../components/Collection/Collection";
import Companys from "../../components/Companys/Companys.jsx";
import Recommended from "../../components/Recommended/Recommended.jsx";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="BEST SELLS" title="RECOMMENDED PRODUCTS" />
        <Collection />
        <Title title="OUR COMPANY PARTNERS" />
        <Companys />
        <Recommended />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
