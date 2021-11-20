import { useState } from "react";
import "./shop.styles.scss";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/CollectionPreview/collection-preview.component";

function Shop() {
  const [shopData] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {shopData.map(({ id, ...props }) => (
        <CollectionPreview key={id} {...props} />
      ))}
    </div>
  );
}

export default Shop;
