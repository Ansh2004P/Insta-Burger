import { useState, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const OnlineStatus = useOnlineStatus();

  const data = useContext(UserContext);
  
  //Subscribing to the store using a Selector
  const cart = useSelector((store) => store.cart.items)
  
  return (
    <div className="flex justify-between bg-pink-100 sm:bg-green-100 lg:bg-orange-100 shadow-sm shadow-slate-200 sticky top-0 z-20">
      <div className="justify-center">
        <img className="w-28 m-5" src={require("../../assets/logo/App_Logo.png")} />
      </div>
      <div className="w-2/3">
        <ul className= "flex justify-evenly  items-center h-28">
          <li>
            Status: {OnlineStatus ? '🟢':'🔴'}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>

          <li className="font-bold">
            <Link to="/cart">Cart - {cart.length} Items</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="font-bold "
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}>
            {btnNameReact}
          </button>
           
        </ul>
      </div>
    </div>
  );
};

export default Header;



// Chunking
// Dynamic Bundling
// Code Splitting
// Lazy Loading