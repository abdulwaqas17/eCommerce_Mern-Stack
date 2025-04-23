import React from "react"
import { Navigate } from "react-router-dom";

const ProtectedRoutes = (props)=> {

    console.log(props);
    

    let token = window.localStorage.getItem(props.tokenName);

    return token ? props.children : <Navigate to={props.redirect} />

}

export default ProtectedRoutes