import { axiosInstance } from "@/axios";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { styled } from "styled-components";

const availableCuisines = [
    "African",
    "Asian",
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese",
];

const availableDiet = [
    "Gluten Free",
    "Ketogenic",
    "Vegetarian",
    "Lacto-Vegetarian",
    "Ovo-Vegetarian",
    "Vegan",
    "Pescetarian",
    "Paleo",
    "Primal",
    "Low FODMAP",
    "Whole30",
];

const availableIntolerances = [
    "Dairy",
    "Egg",
    "Gluten",
    "Grain",
    "Peanut",
    "Seafood",
    "Sesame",
    "Shellfish",
    "Soy",
    "Sulfite",
    "Tree Nut",
    "Wheat",
];

export default function FilterArea({ setRecipes }) {
    const [selectedCuisines, setSelectedCuisines] = useState([]);
    const [selectedDiet, setSelectedDiet] = useState([]);
    const [selectedIntolerances, setSelectedIntolerances] = useState([]);
    // const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // 在选中的复选框内容发生变化时，执行获取食谱的操作

        const fetchRecipes = async () => {
            try {
                const response = await axios.get(
                    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
                        process.env.NEXT_PUBLIC_SPOONACULAR_APIKEY
                    }&cuisine=${selectedCuisines.join(
                        ","
                    )}&diet=${selectedDiet.join(
                        ","
                    )}&intolerances=${selectedIntolerances.join(",")}&number=1`
                );
                setRecipes(response.data.results);
            } catch (error) {
                console.log("API ERROR", error);
            }
        };

        fetchRecipes();
    }, [selectedCuisines, selectedDiet, selectedIntolerances]);

    const handleCuisineCheckboxChange = (value) => {
        setSelectedCuisines((prevSelected) => {
            if (prevSelected.includes(value)) {
                return prevSelected.filter((item) => item !== value);
            } else {
                return [...prevSelected, value];
            }
        });
        console.log("Selected Cuisine After", selectedDiet);
        console.log("New Cuisine Value", selectedDiet);
    };

    const handleDietCheckboxChange = (value) => {
        setSelectedDiet((prevSelected) => {
            if (prevSelected.includes(value)) {
                return prevSelected.filter((item) => item !== value);
            } else {
                return [...prevSelected, value];
            }
        });
        console.log("Selected Intolerances After", selectedIntolerances);
        console.log("New Intolerance Value", value);
    };

    const handleIntolerancesCheckboxChange = (value) => {
        setSelectedIntolerances((prevSelected) => {
            if (prevSelected.includes(value)) {
                return prevSelected.filter((item) => item !== value);
            } else {
                return [...prevSelected, value];
            }
        });
        console.log("Selected Diet After", selectedIntolerances);
        console.log("New Diet Value", value);
    };

    //Style
    const FilterType = styled.div`
        margin-top: 20px;
    `;

    const FilterTypeTytle = styled.h3`
        font-size: 30px;
        margin-bottom: 5px;
    `;

    const Filter = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: start;
        flex-wrap: wrap;
    `;

    const FilterLabel = styled.label`
        margin: 0 5px;
    `;

    return (
        <>
            <FilterType>
                <FilterTypeTytle>CUISINE</FilterTypeTytle>
                <Filter>
                    {availableCuisines.map((cuisine) => (
                        <FilterLabel key={cuisine}>
                            <input
                                type="checkbox"
                                value={cuisine}
                                checked={selectedCuisines.includes(cuisine)}
                                onChange={() =>
                                    handleCuisineCheckboxChange(cuisine)
                                }
                            />
                            {cuisine}
                        </FilterLabel>
                    ))}
                </Filter>
            </FilterType>
            <FilterType>
                <FilterTypeTytle>DIET</FilterTypeTytle>
                <Filter>
                    {availableDiet.map((diet) => (
                        <FilterLabel key={diet}>
                            <input
                                type="checkbox"
                                value={diet}
                                checked={selectedDiet.includes(diet)}
                                onChange={() => handleDietCheckboxChange(diet)}
                            />
                            {diet}
                        </FilterLabel>
                    ))}
                </Filter>
            </FilterType>
            <FilterType>
                <FilterTypeTytle>INTOLERENCES</FilterTypeTytle>
                <Filter>
                    {availableIntolerances.map((intolerances) => (
                        <FilterLabel key={intolerances}>
                            <input
                                type="checkbox"
                                value={intolerances}
                                checked={selectedIntolerances.includes(
                                    intolerances
                                )}
                                onChange={() =>
                                    handleIntolerancesCheckboxChange(
                                        intolerances
                                    )
                                }
                            />
                            {intolerances}
                        </FilterLabel>
                    ))}
                </Filter>
            </FilterType>
        </>
    );
}