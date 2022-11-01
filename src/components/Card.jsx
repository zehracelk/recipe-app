import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ data}) => {

  const navigate = useNavigate();

  const {recipe} = data;

  return (
    <div className="container row m-2">
      <div style={{ width: "300px", height: "300px" }} className=" col-8 m-2 shadow p-2 mb-5 bg-secondary rounded d-flex flex-column align-items-center"
       type="button" >
        <img
          // 
          className=" w-75 rounded-2"
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
