import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper " id="Home">
      <div className="profile-container innerWidth">
        <div className="paddings innerWidth profile-innerContainer ">
          {/* hero left side */}
          <div className="hero-left innerWidth">
            <div className="hero-title primaryText">
              <h1>Hi, I'm Lowrance Fernandes</h1>
            </div>
            <div className="hero-intro ">
              <p className="secondaryText">
                Mr.fernandes is a 27 year old. singer/ songwriter/ musician/ DJ from India. but currently lives in Bermuda island. He writes songs from his experiences and the way he feels about things and emotions. He started off as a musician at church. Currently, he performs as a solo artist.<br /><br />

                As he was growing up, he learned to play the piano, guitar.<br /><br />

                He started to expose himself to many music genres but happened to get more into cover songs. He loves how music can make an impact on people's lives as it did on himself, and can also trigger emotions, That's when he realised that music is all he wanted to do. He also has a youtube channel named " Mr.Fernandes . lets follow him on spotify and other social media.
              </p>
            </div>
            
            {/* tech stack beginning */}
            <div className="stack-container">
              <div className=" innerWidth tech-stack">
                <div className="techstack-title ">
                  <h4 className="innerWidth">
                  </h4>
                </div>
                <div 
                
                className="tech-stack-icons">

                {/* Spotify Link  */}
                  <a href="https://open.spotify.com/artist/5M9jEo6epdX3zGNLDIIN8w?si=bcn3JtcySKmGYj_DhrD-tA" >
                    <img src="./spotify.svg" alt="spotify" width={50} />
                    </a>

                    {/* Youtube LInk  */}

                  <a href="https://youtube.com/@mr.fernandes97?si=0ZCbudooVKpI45Y1" >
                    <img src="./youtube.svg" alt="youtube" width={50} />
                  </a>

                  {/* Apple Link  */}

                  <a href="https://music.apple.com/bm/artist/mr-fernandes/1643083326" >
                    <img src="./apple.svg" alt="apple music" width={50} />
                  </a>

                  {/* Amzon Music Link  */}


                  <a href="https://music.amazon.co.uk/artists/B0BGN71RSF/mr-fernandes?marketplaceId=A1F83G8C2ARO7P&musicTerritory=GB&ref=dm_sh_U1ZHsVeR3gBARevMXNdJ5qRwv" >
                    <img src="./amazon.svg" alt="amazon music" width={50} />
                  </a>
  
                 {/* Instagram Link */}

                  <a href="https://www.instagram.com/_mr_fernandes__/?utm_source=ig_web_button_share_sheet" >
                    <img src="./instagram.svg" alt="instagram" width={50} />
                  </a>
                 
                </div>
              </div>
             
              
            </div>
          </div>

          {/* hero right side */}
          <div className="hero-right innerWidth">
            <div className=" flexCenter image-container">
              <img src="./profile-pic.jpg" alt="profilepic" width={250} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
