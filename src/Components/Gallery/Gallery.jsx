import "./gallery.scss";
import { useState } from "react";
import { Close } from "@material-ui/icons";
import { data } from "../../imgData";
export default function Gallery() {
  const [artContainer, setArtContainer] = useState(false);
  const [artSrc, setArtSrc] = useState("");

  const openImg = (imgSrc) => {
    setArtSrc(imgSrc);
    setArtContainer(true);
  };
  return (
    <>
      <div className={artContainer ? "art-modal open" : "art-modal"}>
        <div className="icons">
          <a href={artSrc} download={artSrc}>
            <img className="icon_" src="assests/download.svg" alt="download" />
          </a>

          <Close className="icon_" onClick={() => setArtContainer(false)} />
        </div>

        <img src={artSrc} alt="" />
      </div>
      <div className="gallery" id="gallery">
        {data.map((d) => (
          <div key={d.id} className="art" onClick={() => openImg(d.imgSrc)}>
            <img src={d.imgSrc} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
