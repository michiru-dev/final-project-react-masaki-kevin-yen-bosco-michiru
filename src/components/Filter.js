import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import React, { useState } from "react";

//Style
const FilterType = styled.div`
    margin-top: 20px;
`;

const FilterTypeTytle = styled.h3`
    font-size: 30px;
    margin-bottom: 5px;
`;

const FilterCheck = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    flex-wrap: wrap;
`;

const FilterLabel = styled.label`
    margin: 0 5px;
`;


function Filter({ filterContents, dispatcher, reduxState, label }) {
    const dispatch = useDispatch();
    const storedSearchedItems = useSelector(
        (state) => state.search[reduxState]
    );

    const handleOnChange = (item) => {
        dispatch(dispatcher(item));
    };

    const [isOpen, setIsOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (item) => {
        dispatch(dispatcher(item));
    };
    const ArrowIcon = styled.span`
    font-size: 20px;
    margin-left: 5px;
    cursor: pointer;
    transform: ${isOpen ? "rotate(180deg)" : "rotate(0deg)"};
    transition: transform 0.3s ease-in-out;
`;



    return (
        <FilterType>
            <FilterTypeTytle>{label} <ArrowIcon onClick={handleDropdownToggle}>
    {isOpen ? "▲ Click To Collapse!" : "▼ Click To Expand!"}
</ArrowIcon></FilterTypeTytle>
            {isOpen && (
            <FilterCheck>
                {filterContents.map((item) => (
                    <FilterLabel key={item}>
                        <input
                            type="checkbox"
                            value={item}
                            checked={storedSearchedItems.includes(item)}
                            onChange={() => handleOnChange(item)}
                        />
                        {item}
                    </FilterLabel>
                ))}
            </FilterCheck>
               )}
        </FilterType>
    );
}

export default Filter;
