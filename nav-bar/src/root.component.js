import React from "react";
import {
  BrowserRouter,
  Link
} from "react-router-dom";
import "./root.component.css";

export default function Root() {
  return ( 
  <BrowserRouter >
    <nav className = "nav" >
    <Link to = "/page-one" className = "link" > React </Link> 
    {/* <Link to = "/page-two" className = "link"> Page 2 </Link>
    <Link to = "/page-three" className = "link"> Page 3 </Link> 
    <Link to = "/test" className = "link"> test </Link>  */}
    <Link to = "/angular" className = "link"> Angular </Link> 
    <Link to = "/vue" className = "link"> Vue </Link> 
    </nav> 
    </BrowserRouter>
  );
}