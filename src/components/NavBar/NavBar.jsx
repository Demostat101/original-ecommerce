import "./NavBar.css"
import { NavLink } from "react-router-dom"
import { IoSearchOutline } from "react-icons/io5"
import { IoCartOutline } from "react-icons/io5"
import { AiOutlineUserAdd } from "react-icons/ai"
import { FiHeart } from "react-icons/fi"
import { CiLogout } from "react-icons/ci"
import { RiMenu2Fill } from "react-icons/ri"
import { RiCloseFill } from "react-icons/ri"



import React, { useState } from 'react'

const NavBar = () => {

  const [isLogin, setIsLogin] = useState(!false)
  const [menu, setMenu] = useState(false)

  const handleClick = () => {
    const show = !menu
    setMenu(show)
  }


  return (
    <div className="NavBar-Container">

        <div className="menu-close" onClick={handleClick}>{menu ? <RiCloseFill/> : <RiMenu2Fill/>}</div>

       <div className="header-links">

          <h2>Exclusive</h2>

          <ul>
              <NavLink className="link" to={"/"}>Home</NavLink>
              <NavLink className="link"  to={"/contact"}>Contact</NavLink>
              <NavLink className="link"  to={"/about"}>About</NavLink>
              <NavLink className="link"  to={"/signup"}>Sign Up</NavLink>
          </ul>

       </div>

        <div className="input-cart-wish">

          <div className="input-container">
            <input type="text" className="input" placeholder="What are you looking for?" />
            <IoSearchOutline size={20}/>
          </div>

          <div className="cart-user-wish">

            <FiHeart size={20}/>

            <div className="cart"><IoCartOutline size={20}/> <span className="cart-items">2</span></div>

            <div className="user"> <div className="user-logo"><AiOutlineUserAdd className="aioutlineuseradd" size={20}/></div>
                <div className="user-details">
                  {isLogin 
                  ? <div className="show-info">
                    <div className="user-account"><AiOutlineUserAdd style={{color:"white"}} size={20}/> <NavLink className="user-link">Manage My Account</NavLink> </div>
                    <div className="user-order"><AiOutlineUserAdd style={{color:"white"}} size={20}/> <NavLink className="user-link">My Order</NavLink> </div>
                    <div className="user-logout"><CiLogout style={{color:"white"}} size={20}/> <NavLink className="user-link">LogOut</NavLink> </div>
                  </div> 
                  : <div className="signIn"><NavLink className="user-link">Sign In</NavLink></div> }

                </div>
            </div>
          </div>


        </div>


    </div>
  )
}

export default NavBar
