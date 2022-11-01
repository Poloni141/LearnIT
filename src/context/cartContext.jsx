import { createContext, useState } from "react";

const cartContext = createContext();

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(item, count) {
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) => {
          return product.id === item.id
            ? { ...product, count: product.count + count }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...item, count }]);
    }
  }

  function removeItem(idToRemove) {
    let newCart = cart.filter((itemInCart) => itemInCart.id !== idToRemove);
    setCart(newCart);
  }

  function getTotalItemCount() {
    let total = 0;
    cart.forEach((itemInCart) => {
      total = total + itemInCart.count;
    });
    return total;
  }

  function resetCart() {
    setCart([]);
  }

  const isInCart = (id) => cart.some((prod) => prod.id === id);

  function getTotalPrice() {
    let total = 0;
    cart.forEach((itemInCart) => {
      total = total + itemInCart.count * itemInCart.price;
    });
    return total;
  }

  return (
    <>
      <cartContext.Provider
        value={{
          cart,
          addToCart,
          removeItem,
          getTotalItemCount,
          isInCart,
          getTotalPrice,
          resetCart,
        }}
      >
        {props.children}
      </cartContext.Provider>
    </>
  );
}

export { cartContext, CartContextProvider };
