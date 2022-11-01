import React from "react";
import { useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Nav from "../components/Nav";

const Home = () => {
  const [info, setInfo] = useState([]);
  const [value, setValue] = useState("");
  const [meal, setMeal] = useState("");

  const getInfo = () => {
    const url = "https://api.edamam.com/search";

    const app_key = "34cddbdd4b71b1a0b32d5c3c892ffe82";

    const app_id = "e8bacba0";

    let query = `${url}?q=${value}&app_id=${app_id}&app_key=${app_key}&mealType=${meal}`;

    console.log(query);

    fetch(query)
      .then((res) => {
        if (!res.ok) {
          throw new Error("something went wrong") && alert("Please search a mealtype");
         
        }
        return res.json();
      })
      .then((data) => setInfo(data.hits))
      .catch((err) => console.log(err) );
  };

  return (
    <div className="d-flex flex-column">
      <div>
        <Nav />
      </div>
      <div className="m-5">
        <Header setValue={setValue} setMeal={setMeal} getInfo={getInfo} />
      </div>
      <div className="d-flex flex-wrap w-100 border">
      {info?.map((data, index) => {
        return <div key={index}>{<Card data={data} />}</div>;
      })}

      </div>
      
    </div>
  );
};

export default Home;
