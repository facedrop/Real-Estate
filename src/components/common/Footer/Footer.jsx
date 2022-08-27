import React from 'react';
import { footer } from "../../data/Data";
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <section className="footerContact">
        <div className="container">
            <div className="send flex">
                <div className="text">
                    <h1>Do You Have Any Questions ?</h1>
                    <p>We'll help you to chose your new proprty.</p>
                </div>
                <button className="btn5">Contact Us Today</button>
            </div>
        </div>
    </section>

    <footer>
        <div className="container">
            <div className="box">
                <div className="logo">
                    <img src="https://rentup.pl/wp-content/uploads/2020/04/logo-1.jpg" alt="" />
                    <h2>Do You Need Help With Anything?</h2>
                    <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
                    
                    <div className="input flex">
                        <input type="text" placeholder="Email Address" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>

             {footer.map((val) => 
             (
                <div className="box">
                    <h3>{val.title}</h3>
                    <ul>
                        {val.text.map((items) => (
                            <li>{items.list}</li>
                        ))}
                    </ul>
                </div>
             ))}
        </div>
    </footer>

    <div className="legal">
        <span>&copy; 2022 RentUp.</span>
    </div>
    </>
  )
}

export default Footer