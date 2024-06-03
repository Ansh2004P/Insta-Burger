import ItemList from "./ItemList";
import React, { useState } from "react";

const NestedCard = (props) => {
  const [isShow, setisShow] = useState(false);

  const show = () => {
    setisShow(!isShow);
  };

  // console.log(props);
  return (
    <div>
      <div
        className="w-6/12 mx-auto my-2 bg-gray-50 border-b-2 border-gray-300 p-4 flex justify-between font-semibold shadow-md"
        onClick={show}
      >
        <span>
          {props.data.title + " "}({props.data.itemCards.length})
        </span>
        <span>{"v"}</span>
      </div>
      {isShow ? <ItemList data={props.data.itemCards} /> : null}
    </div>
  );
};

export default NestedCard;
