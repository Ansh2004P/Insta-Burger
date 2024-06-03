import ShimmerCard from "../utils/Shimmercard";
const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-around">
      {[...Array(9)].map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};

export default Shimmer;
