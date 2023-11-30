import React from "react";
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {itemsActions} from '../store/index';

const OrderContainer = styled.div`
height: 65px;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 65px;
padding-right: 65px;
box-shadow: 0px 15px 10px -15px #111; 
`

const ButtonStack = styled.div`
display: flex;
justify-content: space-evenly;
width: 25%;
`

const BackBtn = styled.span`
height: 25px;
width: 50px;
border: 1.5px solid #006400;
border-radius: 30px;
font-size: 13px;
color: #006400;
font-weight: bold;
padding-top: 4px;
`

const ApproveBtn = styled.span`
height: 25px;
width: 110px;
border: 1.5px solid #006400;
border-radius: 30px;
font-size: 13px;
color: white;
background-color: #006400;
padding-top: 4px;
font-weight: bold;
cursor: pointer;
`

function OrderTitle(){

  const dispatch = useDispatch();

  function finalStatusHandler(){
   dispatch(itemsActions.updateFinalOrderStatus());
  }
    return(
            <OrderContainer>
              <div style={{fontWeight: "bolder", fontSize: "20px"}}>Order Number</div>
              <ButtonStack>
                <BackBtn>Back</BackBtn>
                <ApproveBtn onClick={finalStatusHandler}>Approve Order</ApproveBtn>
              </ButtonStack>
            </OrderContainer>
        )
}

export default OrderTitle;