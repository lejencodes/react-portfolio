import "./portfolioList.scss";
export default function PortfolioList({
  title,
  id,
  activeItem,
  setactiveItem,
}) {
  return (
    <li
      className={activeItem ? "portfolio-list active" : "portfolio-list"}
      onClick={() => setactiveItem(id)}
    >
      {title}
    </li>
  );
}
