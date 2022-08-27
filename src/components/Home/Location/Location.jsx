import React from 'react';
import Headeing from "../../common/Headeing";
import { location } from "../../data/Data";
import "./Location.css"; 

const Location = () => {
  return (
    <>
    <section className="padding">
        <div className="container">
            <Headeing title="Explore By Location" subtitle="Find Your Property Worldwide" />

            <div className="content grid3 mtop">
                {location.map((items, index) => {
                    return(
                        <div className="box" key={index}>
                            <img src={items.cover} alt="" />
                            <div className="overlay">
                                <h5>{items.name}</h5>
                                <p>
                                    <label>{items.Villas}</label>
                                    <label>{items.Offices}</label>
                                    <label>{items.Apartments}</label>
                                </p>
                            </div>
                        </div>    
                    )
                })}
            </div>
        </div>
    </section>
    </>
  )
}

export default Location