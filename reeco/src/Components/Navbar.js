import React from 'react';
import styled from 'styled-components'

const NavbarContainer = styled.div`
height: 40px;
background-color: #006400;
color: white;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 50px;
padding-right: 50px;
`

const Left = styled.div`
width: 40%;
display: flex;
justify-content: space-around;
`

const Right = styled.div`
width: 40%;
display: flex;
justify-content: space-around;
`

function Navbar(){

    return(
        <NavbarContainer>
            <Left>
            <span>Reeco</span>
            <span>Store</span>
            <span>Orders</span>
            <span>Analytics</span>
            </Left>
            <Right>
                <span>Cart Image</span>
                <span>Hello, James</span>
            </Right>

        </NavbarContainer>
    )
}

export default Navbar;