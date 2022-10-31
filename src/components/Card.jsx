import React from "react";

const Card = ({ data }) => {
  return (
    <div className="container row m-2">
      <div className="col-8 m-2" type="button">
        <img
          style={{ width: "400px", height: "400px" }}
          className="rounded-2"
          src={data.recipe.image}
          alt=""
        />
        <div>{data.recipe.label}</div>
      </div>
    </div>
  );
};

export default Card;
