import React from "react";

const Header = ({ setValue, setMeal,getInfo }) => {
  return (
    <div className="d-flex justify-content-center rounded-2 w-75">
      <div className="w-50 mx-2">
        <input
        className="border w-100 rounded-2 bg-secondary text-light p-1"
          type="text"
          placeholder="search"
          onChange={(e) => {
            setValue(e.target.value);
            console.log(e.target.value);
          }}
        />
      </div>
      <div className="w-50">
        <button className="w-100 border border-dark rounded-2 p-1" onClick={() => getInfo()}>Search</button>
      </div>
      <div className="mx-2 w-50 p-2">
        <select className="w-100" name="meal" onChange={(e) => setMeal(e.target.value)}>
          <option value="breakfast">Breakfast</option>
          <option value="brunch">Brunch</option>
          <option value="lunch/dinner">Lunch/Dinner</option>
          <option value="snack">Snack</option>
          <option value="teatime">Teatime</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
