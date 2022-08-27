import React from 'react';
import Back from "../common/Back";
import FeaturedCard from "../Home/Featured/FeaturedCard";
import img from "../images/services.jpg";

const Services = () => {
  return (
    <>
    <section className="services mb">
        {/* <Back name="" title="" cover="" /> */}
        <Back name="Services" title="Services - All Serices" cover={img} />
        <div className="featured container">
            <FeaturedCard />
        </div>
    </section>
    </>
  )
}

export default Services