import { createContext, useState, useEffect } from 'react';

export const Cartcontext = createContext();

export function CartProvider({ children }) {
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, qnty = 1) => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id);

    if (productInCartIndex >= 0) {
      const newCart = [...cart];

      if (qnty > 1) {
        newCart[productInCartIndex].quantity += qnty;
      }else{
        newCart[productInCartIndex].quantity += 1;
      }
      
      if (newCart[productInCartIndex].quantity >= product.stock) {
        newCart[productInCartIndex].quantity = product.stock
        return setCart(newCart);
      }

      return setCart(newCart);
    }

    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: qnty
      }
    ]));
  };

  const removeItemFromCart = product => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id);

    if (productInCartIndex >= 0) {
      const newCart = [...cart];
      if (newCart[productInCartIndex].quantity > 1) {
        newCart[productInCartIndex].quantity -= 1;
      }
      setCart(newCart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = product => {
    setCart(prevState => prevState.filter(item => item.id !== product.id));
  };

  return (
    <Cartcontext.Provider value={{
      cart,
      addToCart,
      clearCart,
      removeItemFromCart,
      removeFromCart
    }}>
      {children}
    </Cartcontext.Provider>
  );
}
