import React,{useState} from "react";
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {itemsActions} from '../store/index';

const Container = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Adjust the alpha value for the desired level of opacity */
  backdrop-filter: blur(5px); /* Adjust the blur amount as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; 
`

const Modal = styled.div`
background: white; /* Adjust the background color as needed */
padding: 20px;
border-radius: 8px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
z-index: 1100;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 10px;
`

function AddItemModal(){


  const products = useSelector((state) => state.products);
  const productCategories = useSelector((state) => state.productCategories);
  const dispatch = useDispatch();

  function closeModalHandler(e){
    dispatch(itemsActions.closeModal())
  }

  const [formData, setFormData] = useState({
    ProductName: productCategories.ProductName,
    Quantity: productCategories.Quantity,
    });

  function inputHandler(e){
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });    
  }

  function submitHandler(){
    dispatch(itemsActions.addProduct({...formData}));
    dispatch(itemsActions.closeModal());
  }

    return(
        <Container onClick={closeModalHandler}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <div>
                Product Name
                <input name="ProductName" onChange={(e) => inputHandler(e)} type="text" placeholder="Product Name"></input>
            </div>
            <div>
                Quantity
                <input name="Quantity" onChange={(e) => inputHandler(e)} type="number" placeholder="Quantity"></input>
            </div>
            <button onClick={submitHandler}>Submit</button>
          </Modal>
        </Container>
    )
}

export default AddItemModal;