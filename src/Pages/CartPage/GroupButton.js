import React, { useState } from "react";
import {updateCartItem } from '../CartPage/cart'
import { ButtonGroup, Button, styled } from "@mui/material";

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`;

const GroupedButton = ({id,updateCartItem}) => {
    const [ counter, setCounter ] = useState(1);

    const handleIncrement = () => {
        setCounter(counter => counter + 1 );
        updateCartItem(id,true,false)
    };

    const handleDecrement = () => {
        setCounter(counter => counter - 1 );
        updateCartItem(id,false,true)
    };

    return (
        <Component>
            <StyledButton onClick={() => handleDecrement()} disabled={counter === 0}>-</StyledButton>
            <Button disabled>{counter}</Button>
            <StyledButton onClick={() => handleIncrement()}>+</StyledButton>
        </Component>
    );
}

export default GroupedButton;