import React from 'react';
import Navbar from './Navbar';
import OrderTitle from './OrderTitle';
import OrderDetails from './OrderDetails';
import ProductBlock from './ProductBlock';
import { useSelector, useDispatch } from 'react-redux';


function HomePage(){

    const orderDetails = useSelector((state) => state.orderDetails);

    return(
        <div>
        <div><Navbar /></div>
        {orderDetails.some(item => item.title === "Status" && item.details == "") && <div><OrderTitle/></div>}
        <div><OrderDetails/></div>
        <div><ProductBlock/></div>
        </div>
    )
}

export default HomePage;