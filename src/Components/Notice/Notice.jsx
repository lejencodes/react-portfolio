import "./notice.scss";
import { useState } from "react";

export default function Notice() {
  const [showNotice, setshowNotice] = useState(true);

  return (
    <div className={showNotice ? "notice open" : "notice"}>
      <h1>Notice!</h1>
      <div className="notice-box">
        <p>
          I am Lejencodes I started working on this website 2 week ago and
          still working to improve it.
          <br />
          You may face some issues in the mobile version as I am still working
          on its styles.
          <br />I am all alone in this project and I am so lazy with
          media-queries.
          <br />
          Promise me you will not make fun of me!
        </p>
        <button onClick={() => setshowNotice(false)}>Ok!</button>
      </div>
    </div>
  );
}
