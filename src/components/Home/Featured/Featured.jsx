import React from 'react';
import Headeing from "../../common/Headeing";
import "./Featured.css";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  return (
    <>
      <section className="featured background">
        <div className="container">
          <Headeing title="Featured Property" subtitle="Find All Type of Property" />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured