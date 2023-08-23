import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type ShoppingCartProps = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <div
      className={` transition-all fixed z-50 h-screen w-full sm:w-[80%] lg:w-1/2 bg-slate-300 full top-0 right-0 ${
        isOpen ? "right-0" : "-right-[100%]"
      }`}>
      <h2
        className=" 
      mx-auto w-fit my-3 font-bold text-xl">
        Cart
      </h2>
      <button
        onClick={closeCart}
        className="flex-center absolute border-0 left-0 top-0 ml-2 text-lg border-solid border-slate-900 hover:border  w-6 h-6
     pb-1 rounded-sm mt-4 hover:bg-slate-400 ">
        x
      </button>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className="font-bold my-2 ml-auto w-fit text-lg">
          Total Price:{" "}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = storeItems.find((item) => item.id === cartItem.id)!;
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
