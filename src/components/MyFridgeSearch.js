import React, { useRef, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { useAutoCompleteFetch } from "@/hooks/useAutoCompleteFetch";
import { addToFridge } from "@/store/slicers/myFridge";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const MyFridgeSearch = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const items = useSelector((state) => state.fridge.items);

    //why using ref? and not just the normal variable?
    //it's because varibale changes on every render and ref doesn't change on redering
    const preventSearchRef = useRef(false);

    const searchKeyword = useDebounce(input);

    const handleAddClick = () => {
        if (input) {
            if (items.includes(input)) {
                window.alert("This item already exists in the fridge!");
            } else {
                dispatch(addToFridge(input));
                setInput("");
            }
        }
    };

    const { autoComplete, setAutoComplete } = useAutoCompleteFetch(
        preventSearchRef,
        searchKeyword
    );

    const handleInputChange = async (e) => {
        //if it's after the selection, the preventSearchRef is true and doesn't fetch, so change it to false
        if (preventSearchRef.current === true) {
            preventSearchRef.current = false;
        }
        setInput(e.target.value);
    };

    const handleAutoCompleteClick = (item) => {
        //don't want to change the autocomplete when you select, so set it to true
        preventSearchRef.current = true;
        setAutoComplete([]);
        setInput(item);
    };

    //Style
    const InputBar = styled.input`
        border-radius: 5px;
        font-size: 15px;
        padding: 10px;
        margin: 0 10px;
        border: 1px solid;
    `;

    const AddButton = styled.button`
        padding: 10px 15px;
        font-size: 15px;
        border-radius: 5px;
        background-color: black;
        border: none;
        color: white;
        cursor: pointer;
    `;

    const AutoCompleteDropdown = styled.div`
        display: flex;
        flex-direction: column;
        border: 1px solid none;
        border-radius: 5px;
        margin: 0 10px;
        max-height: 150px;
        overflow-y: auto;
        position: absolute;
    `;

    const AutoCompleteBtn = styled.button`
        width: 177px;
        font-size: 15px;
        padding: 5px;
        margin: 0;
        background: #ccc;
        border: 1px solid black;
        cursor: pointer;
    `;

    return (
        <div>
            <InputBar
                type="text"
                value={input}
                onChange={handleInputChange}
                id="inputIngredients"
                placeholder="Search"
            ></InputBar>

            {input && autoComplete.length > 0 && (
                <AutoCompleteDropdown>
                    {autoComplete.map((item, index) => (
                        <AutoCompleteBtn
                            onClick={() => handleAutoCompleteClick(item)}
                            key={index}
                        >
                            {item}
                        </AutoCompleteBtn>
                    ))}
                </AutoCompleteDropdown>
            )}

            <AddButton onClick={handleAddClick}>Add</AddButton>
        </div>
    );
};

export default MyFridgeSearch;
