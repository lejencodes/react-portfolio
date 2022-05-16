import "./works.scss";
// import { MobileFriendly } from "@material-ui/icons";
import { useState } from "react";

export default function Works() {
  const [currentSlide, setcurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "left"
      ? setcurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setcurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  const data = [
    {
      id: "1",
      icon: "assests/mobile.png",
      title: "CSS Designs",
      desc: "Some CSS designs I have created for a client.",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "assests/mobile.png",
      title: "JavaScript Functionality",
      desc: "In this task I was asked for writing some scripts with JavaScript",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "3",
      icon: "assests/globe.png",
      title: "Wordpress website",
      desc: "This is an E-Com website I have created for a client with Wordpress",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
  ];

  return (
    <div className="works" id="works">
      <h1>Works</h1>
      <h6>These are some works I have done for the others...</h6>
      <div
        className="slider"
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((d) => (
          <div className="slider-container">
            <div className="item">
              <section className="left">
                <div className="left-container">
                  <div className="img-container">
                    {/* <MobileFriendly className="icon" /> */}
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href="#portfolio">
                    <span>Projects</span>
                  </a>
                </div>
              </section>
              <section className="right">
                <img className="slider-img" src="assests/crop.jpg" alt="" />
                {/* <a href="assests/sliderImg.png" target="blank">
                  <button className="slider-btn">Look!</button>
                </a> */}
              </section>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assests/arrow.png"
        className="arrow left"
        alt="Slider Left Arrow"
        onClick={() => handleClick("left")}
      />
      <img
        src="assests/arrow.png"
        className="arrow right"
        alt="Slider Right Arrow"
        onClick={() => handleClick()}
      />
    </div>
  );
}
