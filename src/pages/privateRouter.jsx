import { Navigate, Outlet } from "react-router-dom";
import { useEffect,useState } from "react";




const PrivateRouter = () => {

  const [user,setUser] = useState([]);

useEffect(()=>{
  setUser( JSON.parse( localStorage.getItem("USER")));

},[]);

  return(
   <div>
    {user ? <Outlet /> : <Navigate to="/"/> }
  </div>



  )};

export default PrivateRouter;