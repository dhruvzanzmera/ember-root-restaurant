import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  // Cart State
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Reservation State
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);
  const [activeReservation, setActiveReservation] = useState(null);

  // Toast Notification
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Cart Functions
  const addToCart = (dish) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.dish.name === dish.name);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        };
        return updated;
      }
      return [...prev, { dish, quantity: 1 }];
    });
    showToast(`Added ${dish.name} to order!`);
  };

  const updateQuantity = (dishName, delta) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.dish.name === dishName) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const removeFromCart = (dishName) => {
    setCart((prev) => prev.filter((item) => item.dish.name !== dishName));
  };

  const clearCart = () => setCart([]);

  // Compute Totals
  const parsePrice = (priceStr) => {
    return parseFloat(priceStr.replace(/[^0-9.]/g, "")) || 0;
  };

  const subtotal = cart.reduce((acc, item) => acc + parsePrice(item.dish.price) * item.quantity, 0);
  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Place Order Simulation
  const placeOrder = (customerDetails) => {
    const orderId = "ER-" + Math.floor(100000 + Math.random() * 900000);
    const orderData = {
      id: orderId,
      items: [...cart],
      subtotal,
      deliveryFee: subtotal > 0 ? 3.99 : 0,
      tax: subtotal * 0.08,
      total: subtotal + (subtotal > 0 ? 3.99 : 0) + subtotal * 0.08,
      customerDetails,
      status: "Received",
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      estimatedTime: "25-35 mins",
    };

    setCurrentOrder(orderData);
    clearCart();
    setIsCartOpen(false);
    showToast(`Order #${orderId} placed successfully!`);
    return orderData;
  };

  // Reservation Function
  const makeReservation = (details) => {
    const resId = "RES-" + Math.floor(1000 + Math.random() * 9000);
    const reservation = {
      id: resId,
      ...details,
      createdAt: new Date().toLocaleDateString(),
    };
    setActiveReservation(reservation);
    setIsReserveModalOpen(false);
    showToast(`Reservation ${resId} confirmed for ${details.date}!`);
    return reservation;
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        subtotal,
        totalCartItems,
        placeOrder,
        currentOrder,
        setCurrentOrder,
        isReserveModalOpen,
        setIsReserveModalOpen,
        activeReservation,
        makeReservation,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
