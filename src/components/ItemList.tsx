import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
const ItemList = () => {
  const item = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  const printWork = () => {
    console.log("click is working in item-list");
  };
  return (
    <div className="item-list" onClick={printWork}>
      {item?.map((data) => {
        return <ItemCard data={data} />;
      })}
    </div>
  );
};
export default ItemList;
