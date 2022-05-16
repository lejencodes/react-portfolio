import "./app.scss";

import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Portfolio from "./Components/Portfolio/Portfolio";
import Works from "./Components/Works/Works";
import Arts from "./Components/Arts/Arts";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Sidebar from "./Components/Sidebar/Sidebar";
// import About from "./Components/About/About";
// import Notice from "./Components/Notice/Notice";
import { useState } from "react";

function App() {
  const [hamMenu, sethamMenu] = useState(false);
  // const [anyNotice, setanyNotice] = useState(false);

  return (
    <>
      <div className="app">
        {/* <div className={anyNotice ? "have-notice" : "no-notice"}>
          <Notice />
        </div> */}
        <Navbar hamMenu={hamMenu} sethamMenu={sethamMenu} />
        <Sidebar showMenu={hamMenu} setshowMenu={sethamMenu} />
        <section className="sections">
          {/* <About /> */}
          <Intro />
          <Portfolio />
          <Arts className="blue" />
          <Works />
          <Testimonials />
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
