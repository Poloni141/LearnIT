import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import Flex from "../Flex/Flex";

function ItemList(props) {
  return (
    <>
      <Flex>
        {props.booksList.map((book) => {
          return (
            <ItemCard
              key={book.id}
              id={book.id}
              img={book.img}
              title={book.title}
              subtitle={book.subtitle}
              editorial={book.editorial}
              price={book.price}
              author={book.author}
              detail={book.detail}
              stock={book.stock}
            />
          );
        })}
      </Flex>
    </>
  );
}

export default ItemList;
