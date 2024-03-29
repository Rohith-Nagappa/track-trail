import React from "react";
import styled from "styled-components";
import avatar from "../../img/hanuman-avatar.jpeg"
import { menuItems } from "../../utils/menuItems";
import { signout } from "../../utils/icons";

const Navigation = () => {
    return(
        
    <div>
        <div className="user-con">
        <img src={avatar} alt=""/>
        <div className="text">
            <h2>Mike</h2>
            <p>Your Money</p>
        </div>
        </div>
        <ul className="menu-items">
            {menuItems.map((item) => {
                return <li key={item.id}>
                 {item.icon}
                 <span>{item.title}</span>
                </li>
            })}
        </ul>
        <div className="bottom-nav">
            <li>{signout} Sign out</li>
        </div>
    </div>
    )
}

const NavStyled = styled`

`;

export default Navigation;