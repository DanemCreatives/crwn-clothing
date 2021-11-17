import "./menu-item.styles.scss";
import { Link } from "react-router-dom";

function MenuItem({ imageUrl, title, size, id, linkUrl }) {
  return (
    <Link to={`./${linkUrl}`} className={`menu-item ${size ? size : ""}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </Link>
  );
}

export default MenuItem;
