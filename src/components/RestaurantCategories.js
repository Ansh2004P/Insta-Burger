import NestedCategories from "./NestedList";
import ItemList from "./ItemList";

const RestaurantCategories = (props) => {
  // console.log(props);
  const { title } = props?.data;
  const itemCards = props?.data?.itemCards || "";
  const setShowIndex = props?.setShowIndex;
  const ShowIndex = props?.ShowIndex;
  
  const show = () => {
    setShowIndex();
  };
  return (
    <div>
      <div
        className="w-6/12 mx-auto my-3 bg-gray-50 shadow-lg p-4 flex justify-between font-bold"
        onClick={show}
      >
        <span>
          {title + " "}
          {itemCards.length === 0 ? "" : "(" + itemCards.length + ")"}
        </span>
        <span>{"v"}</span>
      </div>
      {ShowIndex ? (
        itemCards.length === 0 ? (
          <NestedCategories data={props.data.categories} />
        ) : (
          <ItemList data={props.data.itemCards} />
        )
      ) : null}
    </div>
  );
};

export default RestaurantCategories;
