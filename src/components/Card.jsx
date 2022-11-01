import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ data}) => {

  const navigate = useNavigate();

  const {recipe} = data;

  return (
    <div className="container row m-2">
      <div className="col-8 m-2"
       type="button" >
        <img
          style={{ width: "400px", height: "400px" }}
          className="rounded-2"
          src={recipe.image}
          alt=""
          onClick={() => navigate(`/home/${recipe.calories}`,{state:recipe})}

        />
        <div>{data.recipe.label}</div>
      </div>
    </div>
  );
};

export default Card;
