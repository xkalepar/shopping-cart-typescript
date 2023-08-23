import { useShoppingCart } from "../context/ShoppingCartContext";

type StoredItmes = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoredItem = ({ id, name, price, imgUrl }: StoredItmes) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  return (
    <div className="bg-gray-300 shadow-md shadow-blue-400 min-h-[333px]">
      <img className="w-full h-52 object-cover" src={imgUrl} alt={name} />
      <div>
        <div className="flex-between my-2 px-2">
          <span> {name} </span>
          <span>${price}</span>
        </div>
        <div className="mx-auto w-fit mb-4">
          {getItemQuantity(id) === 0 ? (
            <button className="btn" onClick={() => increaseCartQuantity(id)}>
              add to cart +
            </button>
          ) : (
            <div>
              <div className="flex-between">
                <button
                  className="btn w-6 flex-center "
                  onClick={() => increaseCartQuantity(id)}>
                  +
                </button>
                <span className="mx-1">{getItemQuantity(id)} in cart</span>
                <button
                  className="btn w-6 flex-center"
                  onClick={() => decreaseCartQuantity(id)}>
                  -
                </button>
              </div>
              <button
                onClick={() => removeFromCart(id)}
                className="btn-red mx-auto w-fit block my-1">
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoredItem;
