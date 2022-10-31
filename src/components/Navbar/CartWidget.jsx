import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { getTotalItemCount, cart } = useContext(cartContext);
  console.log(cart);
  return (
    <Link to={`/cart`}>
      <Badge badgeContent={getTotalItemCount()} color="primary">
        <ShoppingCartIcon />
      </Badge>
    </Link>
  );
}

export default CartWidget;
