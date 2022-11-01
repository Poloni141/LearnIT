import React, { useState, useContext } from "react";
import Counter from "../Counter/Counter";
import Button from "@mui/material/Button";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

function ItemDetail({ book }) {
  const [count, setCount] = useState(0);
  const { addToCart } = useContext(cartContext);

  function handleAdd(count) {
    addToCart(book, count);
    setCount(count);
  }

  if (book.id) {
    return (
      <article className="itemDetail">
        <h1>{book.title}</h1>
        <section className="imgContainer">
          <img src={book.img} alt={book.title}></img>
        </section>
        <section>
          <h3>{book.title}</h3>
          <p>{book.detail}</p>
        </section>
        <section>
          {count === 0 ? (
            <Counter stock={book.stock} onAdd={handleAdd} />
          ) : (
            <Link to={`/cart`}>
              <Button variant="contained">🛒</Button>
            </Link>
          )}
        </section>
      </article>
    );
  } else {
    return <Loader />;
  }
}

export default ItemDetail;
