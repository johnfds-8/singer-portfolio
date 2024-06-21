import React from 'react'
import './About.css'
const About = () => {
  return (
    <section className="about-wrapper" id="About">
      <div className="paddings innerWidth about-container">
        {/* left side */}
        <div className=" about-image">
          <img src="./about-pic.jpg" alt="frontend" width={300} />
        </div>
        {/* right side */}
        <div className="about">
          <div className="about-title">
            <h2 className="heading">ABOUT</h2>
          </div>
          <div className="about-para ">
            <p className="secondaryText">
              Mr.fernandes is a 27 year old. singer/ songwriter/ musician/ DJ from India. but currently lives in Bermuda island. He writes songs from his experiences and the way he feels about things and emotions. He started off as a musician at church. Currently, he performs as a solo artist.<br /><br />

              As he was growing up, he learned to play the piano, guitar.<br /><br />

              He started to expose himself to many music genres but happened to get more into cover songs. He loves how music can make an impact on people's lives as it did on himself, and can also trigger emotions, That's when he realised that music is all he wanted to do. He also has a youtube channel named " Mr.Fernandes . lets follow him on spotify and other social media.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;