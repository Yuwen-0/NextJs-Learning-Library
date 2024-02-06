"use client";

import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const router = useRouter();
  const PlaceOrder = () => {
    try {
      // Order Logic
      console.log("Order Placed");
      router.push("/products");
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };
  return (
    <div>
      <h1>Order Product</h1>
      <button onClick={PlaceOrder}>Place Order</button>
    </div>
  );
};

export default OrderProduct;
