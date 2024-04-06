import React from "react";
import styled from "styled-components";
import { calender, comment, rupee, trash } from "../../utils/icons";
import Button from "../Button/Button";

const IncomeItem = ({id,title,amount,date,category,description}) => {
    return(<IncomeItemStyled>
        <div className="icon">

        </div>
        <div className="content">
            <h5>{title}</h5>
            <div className="inner-content">
                <div className="text">
                    <p>{rupee} 45</p>
                    <p>{calender} {date}</p>
                    <p>{comment} {description}</p>
                </div>
                <div className="btn-con">
                    <Button  icon={trash} bPad={'1rem'} bRad={'50%'} bg={'var(--primary-color)'}
                color={'#fff'} iColor={'#fff'} hColor={'var(color-green)'} onClick={()=>{handleDelete(id)}}/>
                </div>
            </div>
        </div>
    </IncomeItemStyled>)
};

const IncomeItemStyled = styled.div`
background: #FCF6F9;
border: 2px solid #FFFFFF;
box-shadow: 0px 1px 15px rgba(0,0,0,0,06);
border-radius: 20px;
`;

export default IncomeItem;