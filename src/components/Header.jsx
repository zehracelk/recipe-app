import React from "react";

const Header = ({ setValue, setMeal,getInfo }) => {
  return (
    <div className="d-flex justify-content-evenly rounded-2 w-75 p-2">
      <div >
        <input
        className="border border-dark rounded-2 bg-white text-secondary p-1"
          type="text"
          placeholder="search"
          onChange={(e) => {
            setValue(e.target.value);
            console.log(e.target.value);
          }}
        />
      </div>

      <div className=" ">
        <button className="p-1 w-100 bg-secondary border border-dark rounded-2 " onClick={() => getInfo()}>Search</button>
      </div>

      <div className="w-10 ">
        <select className="p-1 text-secondary rounded-2" name="meal" onChange={(e) => setMeal(e.target.value)}>
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
