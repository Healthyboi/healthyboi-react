import './ItemCard.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';

const ItemCard = (props) => {
  const { data, dataCb } = props;
  const deleteURL = `http://localhost:7000/api/${data._id}`;
  console.log('item-card data ', data);
  const handleChange = () => {
    axios
      .delete(deleteURL)
      .then(() => {
        console.log('item deleted');
        dataCb([]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <IconButton onClick={handleChange}>
        <DeleteForeverIcon />
      </IconButton>
      <div className="content">
        <p>Exercise Name: {data.name}</p>
        <p>Rep Range: {data.repRange}</p>
        <p>Muscle Group: {data.bodyPart}</p>
      </div>
    </div>
  );
};
export default ItemCard;
