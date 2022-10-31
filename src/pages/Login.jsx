import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import mealSvg from "../assets/meal2.svg";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState([]);

  const handleClick = () => {
    let users = localStorage.getItem("users");

    users = users ? JSON.parse(users) : [];

    const findedUser = users.find(
      (item) =>
        item.username === user.username && item.password === user.password
    );

    console.log(findedUser);

    if (findedUser) {
      localStorage.setItem("USER", JSON.stringify(users));
      navigate("/home");
    }
  };

  console.log(user);

  return (
    <div className="mt-5 container bg-secondary p-5  d-flex flex-column align-items-center rounded-2">
      <div className="border d-flex flex-column align-items-center m-2 p-2 rounded-2">
        <img className="w-25" src={mealSvg} alt="" />
        <div className="m-2">
          <h1 className="text-light">RECEIPE HOME</h1>
        </div>
      </div>

      <div className="border rounded-2 w-50 m-2 text-center ">
        <input
          className="w-75 border"
          type="text"
          placeholder="username"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
      </div>

      <div className="border rounded-2 w-50 text-center">
        <input
          className="w-75 border"
          type="password"
          placeholder="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>

      <div className="p-3">
        <button className=" button button-danger px-4 py-2 rounded-2" onClick={() => handleClick()}>
          Login
        </button>
      </div>
      <div className="m-2">
        <Link
          className="txt-decoration-none text-light border py-2 px-3 border rounded-2  "
          to="/register"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
