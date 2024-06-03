import { ImageLink } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = (props) => {
  console.log(props);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    console.log("Item added to cart");
    dispatch(addItem(item));
  };

  return (
    <div>
      {props.data.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between w-6/12 mx-auto my-10 bg-gray-50 border-b-2 border-gray-300 py-8 "
        >
          <div className="flex flex-col w-9/12 text-left font-serif pr-2 ">
            <span className="text-xs text-gray-800 w-4 h-4 pb-5">
              {item.card.info.isVeg ? (
                <img
                  className="pb-5"
                  src={require("../../assets/logo/veg.png")}
                />
              ) : (
                <img
                  className="pb-5"
                  src={require("../../assets/logo/non-veg.png")}
                />
              )}
            </span>
            <span className="text-sm font-semibold">{item.card.info.name}</span>
            <span className="text-xs text-gray-800 font-medium">
              {item.card.info.finalPrice
                ? ["₹"] + item.card.info.finalPrice / 100
                : item.card.info.defaultPrice
                ? ["₹"] + item.card.info.defaultPrice / 100
                : ["₹"] + item.card.info.price / 100}
            </span>
            <span className="text-xs font-thin pt-3 text-gray-500">
              {item.card.info.description}
            </span>
          </div>
          <div className="w-3/12  h-32 ml-2 px-4">
            <img
              className={
                item.card.info.imageId
                  ? "h-[7.5rem] w-9/12 rounded-3xl  "
                  : "bg-transparent "
              }
              src={
                item.card.info.imageId
                  ? ImageLink + item.card.info.imageId
                  : null
              }
            ></img>
            <div className="relative right-4 bottom-[1.05rem]">
              <button
                className="p-2 text-black bg-gray-100 shadow-lg mr-auto w-6/12 relative rounded-lg border-solid border-2 border-amber-200"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
