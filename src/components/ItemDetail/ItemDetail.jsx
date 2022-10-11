import React from "react";
import Counter from "../Counter/Counter";

function ItemDetail({ book }) {
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
        <Counter stock={book.stock} />
      </section>
    </article>
  );
}

export default ItemDetail;
