import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Nav from "../components/Nav";

const Details = () => {
  const { calories } = useParams;

  console.log(calories);

  const { state } = useLocation();

  console.log(state);

  return (
    <div>
      <div>
        <Nav />
      </div>

      <div className="container d-flex m-5 border border-light p-5 rounded-3">
        <div className="m-4">
          <h2>Nutrients</h2>

          <div>
            Energy : {state.totalNutrients.ENERC_KCAL.quantity}
            {state.totalNutrients.ENERC_KCAL.unit}
          </div>

          <div>
            Calcium : {state.totalNutrients.CA.quantity}
            {state.totalNutrients.CA.unit}
          </div>

          <div>
            Carbs : {state.totalNutrients.CHOCDF.quantity}
            {state.totalNutrients.CHOCDF.unit}
          </div>

          <div>
            Cholesterol:{state.totalNutrients.CHOLE.quantity}
            {state.totalNutrients.CHOLE.unit}
          </div>
        </div>

        <div>
          <img className="rounded-2" src={state.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Details;
