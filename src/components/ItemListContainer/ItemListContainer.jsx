import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
import { getAllBooks, getBooksByCategory } from "../../mockAPI";

const ItemListContainer = (props) => {
  const [booksList, setBooksList] = useState([]);
  const params = useParams();
  const categoryID = params.categoryID;

  useEffect(() => {
    if (categoryID === undefined) {
      getAllBooks().then((database) => {
        setBooksList(database);
      });
    } else {
      getBooksByCategory(categoryID).then((database) => {
        setBooksList(database);
      });
    }
  }, [categoryID]);

  return (
    <div className="ItemListContainer">
      <ItemList booksList={booksList} />
    </div>
  );
};

export default ItemListContainer;
