import React from "react";
import Counter from "../Counter/Counter";

function ItemDetail(book) {
  const { book: book1 } = book;
  console.log(book1);
  return (
    <article className="itemDetail">
      <h1>{book1.title}</h1>
      <section className="imgContainer">
        <img src={book1.img} alt={book1.title}></img>
      </section>
      <section>
        <h3>{book1.title}</h3>
        <p>{book1.detail}</p>
      </section>
      <section>
        <Counter />
      </section>
    </article>
  );
}

export default ItemDetail;
