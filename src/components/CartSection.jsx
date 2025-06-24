import { useContext } from "react";
import { AppContext } from "../App.jsx";

export default function CartSection() {
  const [cart, setCart] = useContext(AppContext); // Using useContext to access the AppContext
  return (
    <div>
      <p>This is "Add to Cart" button:</p>
      <button onClick={() => setCart(cart + 1)}>Add to cart</button>
    </div>
  );
}
