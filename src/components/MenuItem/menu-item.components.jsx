import "./menu-item.styles.scss";

function MenuItem({ image, title, size }) {
  return (
    <div className={`menu-item ${size ? size : ""}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
