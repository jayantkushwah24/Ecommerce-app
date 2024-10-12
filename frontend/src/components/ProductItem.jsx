import { useContext } from "react";
import { ShopContext } from "../main";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  const productImage = image && image[0] ? image[0] : "/default-image.jpg"; // Fallback image

  return (
    <Link className="text-gray-700 cursor-pointer " to={`/product/${id}`}>
      <div className="overflow-hidden ">
        <img
          src={productImage}
          alt={name} // Meaningful alt text for accessibility
          className="hover:scale-110 transition ease-in-out"
        />
      </div>
      <p className="pt-3 pb-1 text-sm ">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
