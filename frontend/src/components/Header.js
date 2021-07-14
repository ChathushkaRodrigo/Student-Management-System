import React from "react";
import {Link } from 'react-router-dom';
function Header(){
    return (
                    <ul className="nav">
            <li class="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Student Management System</a>
            </li>
            <li className="nav-item">
               
                <Link to="/" class="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to = "/add" class="nav-link">Create Student</Link>
            </li>
           
            </ul>

    )
}
export default Header;
