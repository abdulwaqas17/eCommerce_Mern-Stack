import React, { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoutes = (props)=> {

    console.log(props);
    let token = window.localStorage.getItem(props.tokenName);
    let role = props.tokenName.split('T')[0];
    let navigate = useNavigate();

    console.log('role ==>',role);
    

    useEffect(()=> {

        let verifyFunction = async()=> {

        if(token) {
            try {

                const res = await fetch(`http://localhost:3000/verify/${role}`, {
                    method: "GET",
                    headers: { 
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${token}`,
                        role: role,
                     },
                    
                })
        
                let data = await res.json();
        
                console.log('data ==>',data);
        
                // alert(data.message);
        
                if (!data.success) {
        
                    navigate(props.redirect)
                    // <Navigate to={props.redirect} />
        
                }
        
        
               } catch (err) {
        
                console.log(err);
                
               }
        } else {

            navigate(props.redirect)

        }


        }

        verifyFunction();

    },[])

    return props.children
    // return token ? props.children : <Navigate to={props.redirect} />

}

export default ProtectedRoutes