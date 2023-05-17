import React from 'react';
import "./Home.css";
import {Link,Outlet} from "react-router-dom";
function Home(props) {
var links=[
    {
     path:"contact",
     title:"Contact",   
    },
    {
        path:"map",
        title:"Charts and Maps",  

    },
];

    return (
        <div className="categoryContainer">
        <div className="linkContainer">
          {links.map((link, index) => (
            <h1 >
            <Link style={{textDecoration:"none"}} to={link.path}>{link.title}</Link>
            </h1>
          ))}
        </div>
  
        <div>
          <Outlet />
        </div>
      </div>
    );
}

export default Home;