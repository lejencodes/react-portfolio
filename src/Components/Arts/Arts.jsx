import "./arts.scss";
import { useState } from "react";
import Gallery from "../Gallery/Gallery";

import { Close } from "@material-ui/icons";
export default function Arts() {
  const [currentArt, setCurrentArt] = useState(0);
  const [galleryOpen, setgalleryOpen] = useState(false);
  const data = [
    {
      id: "1",
      artSrc: `assests/arts/art${currentArt}.jpg`,
    },
  ];

  const shuffleArt = () => {
    setTimeout(() => {
      setCurrentArt(Math.floor(Math.random() * 15));
    }, 2000);
  };

  const openImg = () => {
    window.open(`assests/arts/art${currentArt}.jpg`);
  };

  const openGallery = () => {
    setgalleryOpen(true);
  };

  return (
    <>
      <div className={galleryOpen ? "gallery-modal open" : "gallery-modal"}>
        <Gallery />

        <Close onClick={() => setgalleryOpen(false)} className="icon" />
      </div>

      <div className="arts" id="arts" onLoad={() => shuffleArt()}>
        <h1>Arts of Lejen</h1>
        <h6>I love to do sketching also,It keeps me creative...</h6>

        {data.map((d) => (
          <div key={d.id} className="art-container">
            <div className="item">
              <img
                className="art-img"
                onClick={() => openImg()}
                src={d.artSrc}
                alt=""
              />
            </div>
          </div>
        ))}
        <button className="viewBtn" onClick={() => openGallery()}>
          View all
        </button>
      </div>
    </>
  );
}
