import React from "react";
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {itemsActions} from '../store/index';

const OrderBlock = styled.div`
height: 80px;
border: 0.5px solid grey;
margin-left: 60px;
margin-right: 60px;
margin-top: 25px;
border-radius: 5px;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`

const OrderSpan = styled.span`
display: flex;
flex-direction: column;
width: 20%;
padding-left: 20px;
padding-right: 20px;
text-align: left;
`

const Seperator = styled.span`
height: 85%;
width: 0.5px;
background-color: grey;
`

function OrderDetails(){

    const dispatch = useDispatch();
    const orderDetails = useSelector((state) => state.orderDetails);
   
    return(
        <OrderBlock>
        {orderDetails.map((el, index) => {
            return <>
             <OrderSpan>
                <span style={{color: "grey", fontSize: "small", fontWeight: "600"}}>{el.title}</span>
                <span>{el.details}</span>
            </OrderSpan>
            {index < 4 && <Seperator/>}
            </>
           
        })}
        </OrderBlock>
    )
}

export default OrderDetails;