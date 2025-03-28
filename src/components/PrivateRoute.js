import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);

  useEffect(()=>{
    if(!token){
        navigate("/")
    }
  },[token]);
  return token ? children : navigate("/");
};

export default PrivateRoute;
