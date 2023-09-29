import React from "react"
import '../styles/NotFound.css'

import { Link } from "react-router-dom";

const NotFound = () =>{
    return (
        <div>
            <h2 className="error404">404 Not Found</h2>
            <h1 
            className="message">Uh oh! This page does not exist.&nbsp;

            <Link className='home-link' to="/">Return to homepage.</Link>

            </h1>
            
        </div>
    )
}

export default NotFound;