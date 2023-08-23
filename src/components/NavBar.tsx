import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
const NavBar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <div className=" bg-white shadow-sm mb-3 shadow-zinc-400 p-2 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <nav>
          <NavLink className={"mr-2.5 text-slate-500 transition-all"} to={"/"}>
            Home
          </NavLink>
          <NavLink
            className={"mr-2.5 text-slate-500 transition-all"}
            to={"/store"}>
            Store
          </NavLink>
          <NavLink className={"text-slate-500 transition-all"} to={"/about"}>
            About
          </NavLink>
        </nav>
        {cartQuantity > 0 && (
          <button
            className=" transition-all bg-white rounded-full border text-blue-500 border-blue-500 p-1.5 sm:p-2 flex-center relative focus:bg-blue-500 focus:text-white hover:bg-blue-500 hover:text-white"
            onClick={openCart}>
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6  "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor">
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>

            <div className="bg-red-600 absolute text-[12px] rounded-full text-white flex-center w-4 h-4 -bottom-0.5 -right-2 ml-0.5">
              {cartQuantity}
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
