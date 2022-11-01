import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBook } from "../../services/firebase";
import Flex from "../Flex/Flex";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer(props) {
  const [book, setBook] = useState([]);
  const { itemID } = useParams();
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    getBook(itemID)
      .then((database) => {
        setBook(database);
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  }, [itemID]);

  return (
    <Flex>
      {errorMsg !== null ? (
        <h1>Error: {errorMsg}</h1>
      ) : (
        <ItemDetail book={book} />
      )}
    </Flex>
  );
}

export default ItemDetailContainer;
