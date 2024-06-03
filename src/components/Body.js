import { useEffect, useState } from "react";
import { Data_Link } from "../utils/constants";
import RestrauntCard, { withPromotedLabel } from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [ListOfRestraunts, setListOfRestraunt] = useState([]);
  const [FilteredRestraunts, setFilteredRestraunts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const OnlineStatus = useOnlineStatus();

  const RestrauntCardPromoted = withPromotedLabel(RestrauntCard);
  // console.log(useState());
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Data_Link);
    const json = await data.json();
    setListOfRestraunt(
      json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunts(
      json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional Rendering
  if (!OnlineStatus) {
    return (
      <div className="offline">
        <h1>Internet Not Connected</h1>
      </div>
    );
  } else {
    return ListOfRestraunts.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="body">
        <div className="flex w-full justify-around">
          <div className="w-5/6 m-4 p-1">
            <input
              type="text"
              className="border-2 w-5/6 p-1 ml-8 rounded-xl shadow-md"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="ml-5 shadow-md bg-pink-200 sm:bg-green-200 lg:bg-orange-200 w-20 h-8 rounded-lg shadow-slate-300"
              onClick={() => {
                const filteredRestraunts = ListOfRestraunts.filter((res) => {
                  return res?.info?.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                });

                setFilteredRestraunts(filteredRestraunts);
              }}
            >
              Search
            </button>
          </div>
          <button
            className="mr-7 mt-4 shadow-md bg-pink-200 sm:bg-green-200 lg:bg-orange-200 w-40 h-11 rounded-lg shadow-slate-300"
            onClick={() => {
              setFilteredRestraunts(
                ListOfRestraunts.filter((res) => res?.info?.avgRating >= 4)
              );
              // console.log(FilteredRestraunts);
            }}
          >
            Top Rated Restraunts
          </button>
        </div>
        <div className="flex flex-wrap">
          {FilteredRestraunts.map((restaurant) => (
            <Link
              className="ml-5 mb-5 hover:scale-110 transition-all duration-300 cursor-pointer "
              key={restaurant.info.id}
              to={"restaurantMenu/" + restaurant.info.id}
            >
              {restaurant?.info?.aggregatedDiscountInfoV3 ? (
                <RestrauntCardPromoted resData={restaurant} />
              ) : (
                <RestrauntCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    );
  }
};

export default Body;
