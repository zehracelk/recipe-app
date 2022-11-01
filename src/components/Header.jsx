import React from "react";

const Header = ({ setValue, setMeal,getInfo }) => {
  return (
    <div className="d-flex row justify-content-center rounded-2 w-75">
      <div className="col-sm-4 col-lg-4 col-md-4  col-xl-4 col-12 mx-2">
        <input
        className="border rounded-2 bg-secondary text-light p-1"
          type="text"
          placeholder="search"
          onChange={(e) => {
            setValue(e.target.value);
            console.log(e.target.value);
          }}
        />
      </div>
      <div className="col-sm-4 col-lg-4 col-md-4 col-xl-4  col-12 ">
        <button className="w-100 border border-dark rounded-2 p-1 " onClick={() => getInfo()}>Search</button>
      </div>
      <div className="col-sm-4 col-lg-4 col-md-4 col-xl-4  col-12 mx-2 p-2">
        <select className=" text-secondary" name="meal" onChange={(e) => setMeal(e.target.value)}>
          <option className="text-secondary" value=""><p className="text-secondary">search meal type</p></option>
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
