import Head from "next/head";
import ItemsToBuy from "@/components/ItemsToBuy";
import { useSelector } from "react-redux";
import { useState } from "react";
import Header from "../../components/Header";
import MyFridge from "@/components/MyFridge";
import RecipeList from "../../components/shopping-list/RecipeList";
import styled from "styled-components";

//Style
const ShoppingListPage = styled.div`
    background-image: url("/homePageImg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
    height: auto;
    min-height: 100vh;
    width: 100vw;
    @media (max-width: 1024px) {
        height: 150vh;
        width: 150vw;
    }
    @media (max-width: 450px) {
        background-image: url("/homePageImg.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center center;
        min-height: 100vh;
        width: 100vw;
        display:flex;
        flex-direction:column;
        height:auto;
    }
`;

const ShoppingListDiv = styled.div`
    display: grid;
    grid-template-columns: 320px 1fr 320px;
    gap: 10px;
    align-items: flex-start;
    justify-items: stretch;
    margin: 20px 0 20px 0;

    @media (max-width: 450px) {
        //height: 100vh;
        width: 100vw;
        display:flex;
        flex-direction:column;
        align-items:center;
    } 
`;

export default function ShoppingList() {
    const recipes = useSelector((state) => state.recipes.recipes);
    const [selecedRecipe, setSelectedRecipe] = useState(null);

    return (
        <ShoppingListPage>
            <Head>
                <title>Shopping List</title>
            </Head>
            <Header />
            <ShoppingListDiv>
                <MyFridge />
                <RecipeList
                    recipes={recipes}
                    setSelectedRecipe={setSelectedRecipe}
                />
                <ItemsToBuy recipe={selecedRecipe} />
            </ShoppingListDiv>
        </ShoppingListPage>
    );
}
