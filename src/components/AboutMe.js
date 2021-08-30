import React from "react";
import author from "../me.jpg"

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <img src={author} alt="author.." />
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1>About Me</h1>
                    <p>
                        B. degree in Hotel Management and Tourism, with over ten years' experience in different fields and countries where I've been developing my professional skills. I am continuously seeking to improve my knowledge, where allows me to increase my expertise and abilities while working towards achieving my goals. 
                    </p>
                </div>
            </div>            
        </div>
    )
}

export default AboutMe
