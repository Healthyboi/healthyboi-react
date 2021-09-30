import './ItemList.css';
import { useContext } from 'react';
import { DataContext } from '../WorkoutList/WorkoutList';
import ItemCard from '../ItemCard/ItemCard';
const ItemList = (props) => {
  let dummyData: any = useContext(DataContext);

  const printWork = () => {
    console.log('click is working in item-list');
  };
  return (
    <div className="item-list" onClick={printWork}>
      {dummyData?.map((data) => {
        return <ItemCard data={data} dataCb={props.dataCb} />;
      })}
    </div>
  );
};
export default ItemList;
