import React from 'react';
import img from "../images/about.jpg";
import Back from "../common/Back";
import Headeing from "../common/Headeing";
import "./About.css";


const About = () => {
  return (
    <>
    <section className="about">
        <Back name="About Us" title="About Us - Who We Are?" cover={img} />
        <div className="container flex mtop">
            <div className="left row">
                <Headeing title="Our Agency Story" subtitle="Check out our company story and work process" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <button className="btn2">More About Us</button>
            </div>
            <div className="right row">
                <img src="https://eac.com.au/wp-content/uploads/sites/3/2019/08/relaxing-home-1920x1080.jpg" alt="" />
            </div>
        </div>
    </section>
    </>
  )
}

export default About