import React from "react"
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({children})=> {

    let token = window.localStorage.getItem('token');

    return token ? children : <Navigate to='/login' />

}

export default ProtectedRoutes