import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
type CartItemProps = {
  quantity: number;
  id: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id)!;
  if (item === null) return null;
  return (
    <>
      <div className="flex-between my-4 mx-4 shadow-md shadow-blue-400">
        <img
          src={item?.imgUrl}
          alt={item?.name}
          className="w-[124px] h-[75px] object-cover"
        />
        <div className="flex-1 ml-2">
          <h3 className="inline-block">{item?.name}</h3>{" "}
          {quantity > 1 && (
            <span className=" inline-block text-[12px] text-slate-500">
              {quantity}x{" "}
            </span>
          )}
          <div className="text-[12px] text-slate-500">{item?.price}$</div>
        </div>
        <div className="">
          {formatCurrency(item?.price * quantity)}
          <button
            onClick={() => removeFromCart(item?.id)}
            className=" transition-all border border-black w-6 h-fit ml-2 mr-1 rounded-sm hover:bg-red-500 hover:text-white hover:border-white">
            x
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
