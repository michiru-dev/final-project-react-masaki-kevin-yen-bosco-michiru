import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import MyFridgeItem from "./MyFridgeItem";

//Style
const ItemsUl = styled.ul`
    font-size: 15px;
    list-style-type: none;
    padding: 20px;
    margin: 0;
`;

const MyFridgeItems = () => {
    const items = useSelector((state) => state.fridge.items);

    return (
        <div>
            <ItemsUl>
                {items.map((data, index) => (
                    <MyFridgeItem key={index} item={data} />
                ))}
            </ItemsUl>
        </div>
    );
};

export default React.memo(MyFridgeItems);
