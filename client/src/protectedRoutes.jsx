import React from 'react'
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const user = useSelector((state) => state.user);
    let location = useLocation();

      const token = sessionStorage.getItem('token');
      if(token) {
        dispatch(loginSuccess(token));
      }

    if(!token) {
        return <Navigate to="/login" replace />
    }
 return children

};

export default ProtectedRoute;