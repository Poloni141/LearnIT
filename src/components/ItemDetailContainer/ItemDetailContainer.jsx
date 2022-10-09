import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBook } from "../../mockAPI";
import Flex from "../Flex/Flex";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer(props) {
  const [book, setBook] = useState();
  const { itemID } = useParams();

  useEffect(() => {
    getBook(itemID).then((database) => {
      setBook(database);
    });
  }, [itemID]);

  return (
    <Flex>
      <ItemDetail book={book} />;
    </Flex>
  );
}

export default ItemDetailContainer;
