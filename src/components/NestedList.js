import NestedCard from "./NestedCard";
import ItemList from "./ItemList";

const NestedCategories = (props) => {
  // console.log(props);

  return (
    <div>
      {props.data.map((category) => (
        // console.log(category)
        <div key={category.title}>
          <NestedCard data={category} />
        </div>
      ))}
    </div>
  );
};

export default NestedCategories;
