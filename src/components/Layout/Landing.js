import React from 'react'
import Register from "../auth/Register"; 
import Login from "../auth/Login"
import {Route } from "react-router-dom"; 
const  Landing = () =>  {
    return (
        <div>
            <h1>Landing Page is Ok </h1>
            <Route exact path = "/register" component = {Register} />
            <Route exact path = "/login" component = {Login} />
        </div>
    )
}

export default Landing
