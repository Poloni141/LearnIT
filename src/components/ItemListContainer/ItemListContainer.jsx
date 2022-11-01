import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getAllBooks, getBooksByCategory } from "../../services/firebase";
import Loader from "../Loader/Loader";

const ItemListContainer = (props) => {
  const [booksList, setBooksList] = useState([]);
  const params = useParams();
  const categoryID = params.categoryID;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (categoryID === undefined) {
      getAllBooks().then((database) => {
        setBooksList(database);
        setLoading(false);
      });
    } else {
      getBooksByCategory(categoryID).then((database) => {
        setBooksList(database);
        setLoading(false);
      });
    }
  }, [categoryID]);

  return (
    <div className="ItemListContainer">
      {loading ? <Loader /> : <ItemList booksList={booksList} />}
    </div>
  );
};

export default ItemListContainer;
