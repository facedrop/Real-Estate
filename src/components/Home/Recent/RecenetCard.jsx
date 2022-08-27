import React from 'react'
import { list } from "../../data/Data";

const RecenetCard = () => {
  return (
    <div>
        <div className="content grid3 mtop">
            {list.map((val, index) => {
                const { cover, category, location, name, price, type } = val;
                return (
                    <div className="box shadow">
                        <div className="img">
                            <img src={cover} alt="" />
                        </div>

                        <div className="text">
                            <div className="category flex">
                                <span style={{ background: category === "For Sale" ? "#25B5791A" : "#FF98001A", color: category === "For Sale" ? "#25B579" : "#FF9800"}}>{category}</span>
                                <i className="fa fa-heart"></i>
                            </div>
                            <h4>{name}</h4>
                            <p>
                                <i className="fa fa-location-dot"></i> {location}
                            </p>
                        </div>
                        <div className="button flex">
                            <div>
                                <button className="btn2">{price}</button>
                                <label>/m2</label>
                            </div>
                            <span>{type}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default RecenetCard