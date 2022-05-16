import "./navbar.scss";
import { Call, MailOutline } from "@material-ui/icons";

export default function Navbar({ hamMenu, sethamMenu }) {
  return (
    <nav className={"navbar " + (hamMenu && "active")}>
      <div className="nav-wrapper">
        <section className="left">
          <a href="#intro" className="logo">
            lejencodes
          </a>
          <div className="contact-items">
            <Call className="icon" />
            <span className="contact">+12-3456345213</span>
          </div>
          <div className="contact-items">
            <MailOutline className="icon" />
            <span className="email">lejencodes.noreply@gmail.com</span>
          </div>
        </section>
        <section className="right">
          <div className="hamburger" onClick={() => sethamMenu(!hamMenu)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </section>
      </div>
    </nav>
  );
}
