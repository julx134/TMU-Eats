import React from 'react'
import { useEffect } from "react"
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom";


function Login(){
    const navigate = useNavigate();

    function handleResponse(response){
        const user = jwt_decode(response.credential);
        console.log(user.email_verified);
        if(user.email_verified==true){
            navigate("/home");
        }
    }

    useEffect(() =>
    {
        /* global google */
        google.accounts.id.initialize({
            client_id: "227140293213-9cljm3o56aknvjk0ucmnocm78inn20pl.apps.googleusercontent.com",
            callback: handleResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("loginButton"),
            {theme: "filled_blue", size: "large"}
        );

    },[]);
    

    return(
        <div id='loginWrapper'>
            <h1 id='loginText'>Login Below</h1>
            <center><div id="loginButton"></div></center>

        </div>

    );

}

export default Login;