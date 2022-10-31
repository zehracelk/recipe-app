import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";

const Register = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState([]);

  const handleClick =()=>{


    let users = localStorage.getItem("users");
    
    if (users){
        users = JSON.parse(users)
        users.push(user)
        localStorage.setItem("users",JSON.stringify(users));

    }else{
        var data = [user];
        localStorage.setItem("users",JSON.stringify(data));
    }
    navigate("/");

  }

  
  console.log(user);


  return (
    <div>

      <div>
        <Nav/>
      </div>

      <div className="d-flex container flex-column mt-5">
        <input className="rounded-2 m-2 p-2"
          type="text"
          placeholder="username"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input className="rounded-2 m-2 p-2"
          type="password"
          placeholder="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button className="rounded-2 m-2 p-2" onClick={() => handleClick()}>Register</button>
      </div>
    </div>
  );


};

export default Register;
