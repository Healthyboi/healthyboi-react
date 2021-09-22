import { useHistory } from 'react-router-dom';
const ItemCard = (props) => {
  const { data } = props;
  console.log('item-card data ', data);
  const history = useHistory();
  const printWork = () => {
    console.log('click is working in item-card');
    history.push('/item-page');
  };
  return (
    <div className="item-card" onClick={printWork}>
      <div className="content">
        <p>Exercise Name: {data.name}</p>
        <p>Rep Range: {data.repRange}</p>
        <p>Muscle Group: {data.bodyPart}</p>
      </div>
    </div>
  );
};
export default ItemCard;
