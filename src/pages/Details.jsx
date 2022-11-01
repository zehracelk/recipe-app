import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Details = () => {

  const {calories} = useParams;

  console.log(calories);

  const { state} = useLocation();

  console.log(state);


  return (
    <div className='container d-flex mt-5 '>
      <div>
      <h2>Nutrients</h2>
      
      <div>
     Energy : {state.totalNutrients.ENERC_KCAL.quantity}{state.totalNutrients.ENERC_KCAL.unit}
      </div>


      <div>
      Cholestrol :{state.totalNutrients.CHOLE.quantity}{state.totalNutrients.CHOLE.unit}
      </div>
      </div>

      <div>
        <img src={state.image} alt="" />
      </div>
      
    </div>
  )
}

export default Details
