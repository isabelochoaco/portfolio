import React from "react"
import ReactTypingEffect from "react-typing-effect";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>web development and design</h1>
                <ReactTypingEffect
                className="typed-text"
                text={["Web Design", "Web Development", "Facebook Ads", "Google Ads"]}
                speed={90}
                eraseSpeed={90}
                eraseDelay={90}
                typingDelay={90}
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>            
        </div>
    )
}

export default Header
