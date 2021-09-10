import React from "react";
import { useHistory } from "react-router-dom";
const ItemCard = (props) => {
  const { data } = props;
  console.log("item-card data ", data);
  const history = useHistory();
  const printWork = () => {
    console.log("click is working in item-card");
    history.push("/item-page");
  };
  return (
    <div className="item-card" onClick={printWork}>
      <div className="content">
        <img
          src={
            "https://previews.123rf.com/images/monuttanit/monuttanit1802/monuttanit180200001/95571225-404-high-tech-error-page-not-found-background-vector-graphic.jpg"
          }
          alt=""
        />
        <span></span>
        <h2>PLACEHOLDER</h2>
        <p>Growth hacking vesting period traction seed money ecosystem.</p>
      </div>
    </div>
  );
};
export default ItemCard;
