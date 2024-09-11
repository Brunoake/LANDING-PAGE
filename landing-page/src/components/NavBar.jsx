import { useState } from "react"
import "./Navbar.css"

export const NavBar = () => {
  return (
    <div className="nav-container">
        <h1>Managed IT Services You  Can Trust</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor odio architecto commodi illum quos obcaecati deserunt nobis  animi.</p>
        <nav className="navbar">
            <a href="#"> <p>GET A FREE QUOTE</p></a>
            <a href="#"><p>LEARN MORE</p></a>
            <a href="#"><p>LIVE CHAT</p></a>
        </nav>
    </div>
  )
}
