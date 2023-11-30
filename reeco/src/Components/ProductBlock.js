import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import {itemsActions} from '../store/index';
import AddItemModal from "./AddItemModal";

const ProductContainer = styled.div`
height: auto;
border: 0.5px solid grey;
border-radius: 5px;
margin-left: 60px;
margin-right: 60px;
margin-top: 25px;
margin-bottom: 50px;
`

const TopContainer = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
align-items: center;
padding: 15px;
`

const AddItem = styled.span`
height: 25px;
width: 90px;
border: 1.5px solid #006400;
border-radius: 30px;
font-size: 13px;
color: #006400;
font-weight: bold;
padding-top: 4px;
cursor: pointer;
`

const Btn = styled.span`
cursor: pointer;
width: 30%;
text-align: right;
`

function ProductBlock(){

  const [searchTerm, setSearchTerm] = useState('');

  const products = useSelector((state) => state.products);
  const addItem = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemsActions.updateOrderTotal());
  }, [products]);

  function statusChangeHandler(name, e){
   dispatch(itemsActions.updateStatus({"event": e.target.textContent, "name": name}));
  }

  function addItemHandler(){
    dispatch(itemsActions.addItemClick())
  }

  function handleSearchChange(e){
    setSearchTerm(e.target.value);
   }

   const filteredProducts = products.filter((item) =>
    item.ProductName.toLowerCase().includes(searchTerm.toLowerCase())
  );
   
    return(
    <>
  <ProductContainer>
    <TopContainer>
        <span><input onChange={(e) => handleSearchChange(e)} 
        style={{width: "350px", 
                height: "25px", 
                borderRadius: "12px", 
                border: "1px grey solid", 
                paddingLeft: "10px"}} 
                type="text" placeholder="Search">
              </input>
        </span>
        <AddItem onClick={addItemHandler}>Add Item</AddItem>      
    </TopContainer>
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{width: 300}}>Product Name</TableCell>
            <TableCell sx={{width: 70}} align="left">Brand</TableCell>
            <TableCell sx={{width: 70}} align="left">Price</TableCell>
            <TableCell sx={{width: 70}} align="left">Quantity</TableCell>
            <TableCell sx={{width: 70}} align="left">Total</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(searchTerm === '' ? products : filteredProducts).map((item) => (
            <TableRow
              key={item.ProductName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.ProductName}
              </TableCell>
              <TableCell align="left">{item.Brand}</TableCell>
              <TableCell align="left">{item.Price}</TableCell>
              <TableCell align="left">{item.Quantity}</TableCell>
              <TableCell align="left">{Math.floor(item.Quantity * item.Price)}</TableCell>
              <TableCell style={{display: "flex", justifyContent: "space-between"}} align="left">
                <span style={{textAlign: "left", width: "30%"}}>{item.Status}</span>
                <Btn onClick={(e) => statusChangeHandler(item.ProductName, e)}>Tick</Btn>
                <Btn onClick={(e) => statusChangeHandler(item.ProductName, e)}>Cross</Btn>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>     
    </ProductContainer>
        {addItem && <AddItemModal />}
    </>

    
    )
}

export default ProductBlock;

