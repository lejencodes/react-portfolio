import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef, useState } from "react";
import { Close } from "@material-ui/icons";
import About from "../About/About.jsx";

export default function Intro() {
  const [aboutOpen, setaboutOpen] = useState(false);
  const textref = useRef();

  useEffect(() => {
    init(textref.current, {
      showCursor: true,
      backDelay: 1500,
      strings: [
        "<>Designer</>",
        "<>Programming</>",
        "<>Frontend Dev</>",
        "<>Wordpress Dev</>",
      ],
    });
  }, []);

  return (
    <>
      <div className={aboutOpen ? "about-modal open" : "about-modal"}>
        <About />

        <Close onClick={() => setaboutOpen(false)} className="icon" />
      </div>

      <div className="intro" id="intro">
        <section className="left">
          <div className="img-container">
            <img src="assests/me.png" alt="" />
          </div>
        </section>
        <section className="right">
          <div className="intro-wrapper">
            <h1>namaste! I'm Lejen Codes</h1>
            <p>
              I'm a programmer and frontend developer.I created this website
              with react.js to represent myself on the internet :) <br />
              Please take a look!
            </p>
            <h2>
              Skills I have: <span ref={textref}></span>
            </h2>
          </div>
          <button onClick={() => setaboutOpen(true)}>Learn ME!</button>
        </section>
      </div>
    </>
  );
}
