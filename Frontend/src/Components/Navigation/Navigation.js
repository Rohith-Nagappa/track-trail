import React from "react";
import styled from "styled-components";
import avatar from "../../img/hanuman-avatar.jpeg"

const Navigation = () => {
    return(
    <NavStyled>
        <div className="user-con">
        <img src={avatar} alt=""/>
        <div className="text">
            <h2>Mike</h2>
            <p>Your Money</p>
        </div>
        </div>
        <ul className="menu-items"></ul>
    </NavStyled>
    )
}

const NavStyled = styled`

`;

export default Navigation;