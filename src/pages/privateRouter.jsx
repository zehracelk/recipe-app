import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";



const PrivateRouter = () => {


 const user = JSON.parse( localStorage.getItem("USER"));


  return(
   <div>
    {user ? <Outlet /> : <Navigate to="/"/> }
  </div>



  )};

export default PrivateRouter;