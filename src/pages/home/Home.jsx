import React from "react";
import FeaturedProperties from "../../components/featured-properties/FeaturedProperties";
import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/property-List/PropertyList";
import "./home.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <div className="homeTitle">
          <h1>Browse by property type</h1>
        </div>
        <PropertyList />
        <div className="homeTitle">
          <h1>Homes guests love</h1>
        </div>
       
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </>
  );
};

export default Home;
