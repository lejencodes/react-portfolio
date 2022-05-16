import "./about.scss";
import { Facebook, GitHub, Instagram, LinkedIn } from "@material-ui/icons";

export default function About() {
  return (
    <div className="about" id="about">
      <section className="left">
        <div className="about-img-cont">
          <img src="assests/man.png" alt="" />
        </div>
        <div className="about-sm-cont">
          <a href="https://github.com/lejencodes" target="_blank">
            <GitHub className="sm-icon" />
          </a>
          <a href="https://www.linkedin.com/in/lejencodes/" target="_blank">
            <LinkedIn className="sm-icon" />
          </a>
          <a href="https://www.instagram.com/lejencodes/" target="_blank">
            <Instagram className="sm-icon" />
          </a>
          <a href="#" target="_blank">
            <Facebook className="sm-icon" />
          </a>
        </div>
      </section>
      <section className="right">
        <div className="about-text">
          <h1>Thank You!</h1>
          <h6>I'm happy you want to learn me!</h6>
        </div>
        <div className="about-desc">
          <p>
            Namste,
            <br /> I'm Lejencodes. I am a frontend developer currently
            working with react.js.
            <br />
            <p></p>I have started my programming journey back in 2021 and found
            web-designing as an interesting subject. I love to create beautiful
            designs over the web. As an artist it keeps me creative and
            confident. I have created few tiny projects with Java-Script,
            React.js and python programming languages. I also worked for some
            freelancing projects as a Wordpress developer.
          </p>
        </div>
        <div className="about-butt">
          <a href="https://www.fiverr.com/users/lejencodes/" target="_blank">
            <button>Hire me!</button>
          </a>

          <a href="assests/cv.pdf" target="_blank" download="assests/cv.pdf">
            <button>Download CV</button>
          </a>
        </div>
      </section>
    </div>
  );
}
