import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import UserFetchMenu from "../utils/userFetchMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const ResInfo = UserFetchMenu(resId);
  const [ShowIndex, setShowIndex] = useState(0);

  if (ResInfo === null) return <Shimmer />;

  const { name, costForTwo, cuisines } = ResInfo?.cards[2]?.card?.card?.info;
  const categories =
    ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-medium text-lg">
        {cuisines.join(", ")} - {costForTwo / 100} for two
      </p>

      {
        // categories ?
        categories.map((category, index) => (
          <RestaurantCategories
            key={category?.card?.card?.title}
            data={category?.card?.card}
            ShowIndex={ index ===  ShowIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))
      }
    </div>
  );
};

export default RestaurantMenu;
