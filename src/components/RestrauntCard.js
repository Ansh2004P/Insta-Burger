import { ImageLink } from "../utils/constants";

const RestrauntCard = (props) => {
  // console.log(props);
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;

  const deliveryTime = resData?.info?.sla.slaString;
  // console.log(ImageLink + cloudinaryImageId);
  return (
    <div className="m-4 p-4 w-[250px]  bg-gray-100 rounded-md shadow-lg shadow-gray-400">
      <img
        className="h-48 w-[250px]"
        src={ImageLink + cloudinaryImageId}
        alt="restraunt"
      ></img>
      <h3 className="flex text-nowrap truncate font-bold">{name}</h3>
      <h4 className="flex text-nowrap truncate font-thin">
        {cuisines.join(", ")}
      </h4>
      <h4 className="font-extrabold">{"⭐" + avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestrauntCard) => {
  return (props) => {
    const { resData } = props;
    const { header, subHeader } = resData?.info?.aggregatedDiscountInfoV3;
    return (
      <div>
        <label className="absolute ml-8 pl-2 font-extrabold text-lg w-[218px] h-10 bg-gradient-to-t from-black to-transparent text-gray-100 mt-[168px]">
          {(header ? header : "") + " " + (subHeader ? subHeader : "")}
        </label>
        <RestrauntCard {...props} />
      </div>
    );
  };
};

export default RestrauntCard;
