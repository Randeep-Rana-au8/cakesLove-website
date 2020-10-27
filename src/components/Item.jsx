import React from "react";

const Item = ({ name, price, image, description }) => {
  return (
    <div className="item">
      <img className="itemImage" src={image} alt="" />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

export default Item;
