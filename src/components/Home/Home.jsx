import React from 'react';
import "./Home.css";
import Hero from "./Hero/Hero";
import Featured from "./Featured/Featured";
import Recent from "./Recent/Recent";
import Location from "./Location/Location";

const Home = () => {
  return (
    <>
    <Hero />
    <Featured />
    <Recent />
    <Location />
    </>
  )
}

export default Home