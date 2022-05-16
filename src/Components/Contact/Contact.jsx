import "./contact.scss";
import { useState } from "react";
import Footer from "../Footer/Footer";
export default function Contact() {
  const [message, setmessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setmessage(true);
  };
  return (
    <div className="footer-div">
      <div className="contact" id="contact">
        <section className="left">
          <img src="assests/shake.svg" alt="" />
        </section>
        <section className="right">
          <h1>Contact.</h1>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
            {message && <span>Yo!,I'll catch you ASAP :)</span>}
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
}
