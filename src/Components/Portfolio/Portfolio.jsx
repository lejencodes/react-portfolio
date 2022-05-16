import "./portfolio.scss";
import {
  featuredPortfolio,
  reactPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
import PortfolioList from "./PortfolioList";
import { useState, useEffect } from "react";

export default function Portfolio() {
  const [activeItem, setactiveItem] = useState("Featured");
  const [data, setdata] = useState([]);

  useEffect(() => {
    switch (activeItem) {
      case "Featured":
        setdata(featuredPortfolio);
        break;
      case "React-App":
        setdata(reactPortfolio);
        break;
      case "Mobile-App":
        setdata(mobilePortfolio);
        break;
      case "Designing":
        setdata(designPortfolio);
        break;
      case "Branding":
        setdata(contentPortfolio);
        break;

      default:
        break;
    }
  }, [activeItem]);

  const portfolioList = [
    { id: "Featured", title: "Featured" },
    { id: "React-App", title: "React-App" },
    { id: "Java-Script", title: "Java-Script" },
    { id: "Designing", title: "Designing" },
    { id: "Wordpress", title: "Wordpress" },
  ];

  const openProject = (link) => {
    window.open(link);
  };

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <h6>Take a look at some projects I have created!</h6>
      <ul>
        {portfolioList.map((item) => (
          <PortfolioList
            title={item.title}
            id={item.id}
            activeItem={activeItem === item.id}
            setactiveItem={setactiveItem}
          />
        ))}
      </ul>

      <div className="container">
        {data.map((d) => (
          <div className="item" onClick={() => openProject(d.link)}>
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
