import "./sidebar.scss";

export default function Menu({ showMenu, setshowMenu }) {
  return (
    <aside>
      <div className={"menu " + (showMenu && "active")}>
        <ul>
          <li onClick={() => setshowMenu(false)} className="links">
            <a href="#intro">Home</a>
          </li>
          <li onClick={() => setshowMenu(false)} className="links">
            <a href="#portfolio">About</a>
          </li>
          <li onClick={() => setshowMenu(false)} className="links">
            <a href="#arts">Arts</a>
          </li>
          <li onClick={() => setshowMenu(false)} className="links">
            <a href="#works">Works</a>
          </li>
          <li onClick={() => setshowMenu(false)} className="links">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li onClick={() => setshowMenu(false)} className="links">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
