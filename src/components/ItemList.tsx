import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from './WorkoutList/WorkoutList';
import ItemCard from './ItemCard';
const ItemList = () => {
  let dummyData: any = useContext(DataContext);

  const printWork = () => {
    console.log('click is working in item-list');
  };
  return (
    <div className="item-list" onClick={printWork}>
      {dummyData?.map((data) => {
        return <ItemCard data={data} />;
      })}
    </div>
  );
};
export default ItemList;
