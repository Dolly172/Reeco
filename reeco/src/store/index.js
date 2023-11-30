import {createSlice, configureStore} from '@reduxjs/toolkit';

let itemsInitialState = {products: [
    {
        "ProductName": "Sugar",
        "Brand": "Tata",
        "Price": 40,
        "Quantity": 5,
        "Total": 0,
        "Status": "",
        "Logo1": "",
        "Logo2": "",
    },
    {
        "ProductName": "Salt",
        "Brand": "Tata",
        "Price": 30,
        "Quantity": 2,
        "Total": 0,
        "Status": "",
        "Logo1": "",
        "Logo2": "",
    },
    {
        "ProductName": "Potato",
        "Brand": "Tata",
        "Price": 50,
        "Quantity": 3,
        "Total": 0,
        "Status": "",
        "Logo1": "",
        "Logo2": "",
    },
    {
        "ProductName": "Tomato",
        "Brand": "Tata",
        "Price": 20,
        "Quantity": 2,
        "Total": 0,
        "Status": "",
        "Logo1": "",
        "Logo2": "",
    },
    {
        "ProductName": "Honey",
        "Brand": "Tata",
        "Price": 80,
        "Quantity": 5,
        "Total": 0,
        "Status": "",
        "Logo1": "",
        "Logo2": "",
    },
],
orderDetails: [
    {title: "Supplier", details: "ab  sb xgv  shbxh"}, 
    {title: "Shipping Date", details: "05/03/2022"}, 
    {title: "Total", details: ""}, 
    {title: "Category", details: "Icons"}, 
    {title: "Status", details: ""}
    ],
addItem: false,
productCategories: {
    "ProductName": "",
        "Brand": "Tata",
        "Price": 50,
        "Quantity": 0,
        "Total": 0,
        "Status": "",
        "Logo1": "",
        "Logo2": "",
}
}

const itemsSlice = createSlice({
    name: 'items',
    initialState: itemsInitialState,
    reducers: {
      updateStatus(state, action){
       const {event, name} = action.payload;
       const index = state.products.findIndex((item) => item.ProductName === name);
       if(index !== -1 && event === "Tick"){
        state.products[index] = {...state.products[index], Status: "Approved"};
       } else if(index !== -1 && event === "Cross"){
        state.products[index] = {...state.products[index], Status: "Missing"};
       }
      },
      updateFinalOrderStatus(state, action){
        const index = state.orderDetails.findIndex((item) => item.title === "Status");
        state.orderDetails[index] = {...state.orderDetails[index], details: "Order Approved"};
     },
     updateOrderTotal(state){
        state.products.map((product) => {
           return product.Total = product.Quantity * product.Price;
        })
        let total = 0;
        for(let i=0; i<state.products.length; i++){
            total += state.products[i].Total
        }
        const index = state.orderDetails.findIndex((item) => item.title === "Total");
        state.orderDetails[index] = {...state.orderDetails[index], details: total};
     },
     addItemClick(state){
        state.addItem = true;
     },
     closeModal(state){
        state.addItem = false;
     },
     addProduct(state, action){
        state.productCategories = {...state.productCategories, ProductName: action.payload.ProductName, Quantity: action.payload.Quantity};
        state.products.push(state.productCategories);
     }
    }
    
})

const store = configureStore({
    reducer : itemsSlice.reducer
})

export const itemsActions = itemsSlice.actions;

export default store;