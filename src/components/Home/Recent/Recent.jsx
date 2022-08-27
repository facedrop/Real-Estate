import React from 'react'
import Headeing from "../../common/Headeing";
import RecenetCard from "./RecenetCard";
import "./Recenet.css";

const Recent = () => {
  return (
    <>
    <section className="recent padding">
        <div className="container">
            <Headeing title="Recent Property Listed" subtitle="More Than 100+ Property Listed in Last Hour" />
            <RecenetCard />
        </div>    
    </section>    
    </>
  )
}

export default Recent