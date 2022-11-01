import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Button } from "@mui/material";
import UserForm from "../Form/UserForm";
import ClearIcon from "@mui/icons-material/Clear";

function Cart() {
  const { cart, removeItem, getTotalPrice } = useContext(cartContext);

  return (
    <>
      {cart.map((book) => (
        <div>
          <h2>{book.title}</h2>
          <h4>${book.price}</h4>
          <h4>{book.count}</h4>
          <h4>Precio Total: ${book.price * book.count}</h4>
          <Button
            onClick={() => removeItem(book.id)}
            variant="contained"
            color="error"
            size="small"
          >
            <ClearIcon />
          </Button>
        </div>
      ))}
      <UserForm cart={cart} getTotalPrice={getTotalPrice} />
    </>
  );
}

export default Cart;
