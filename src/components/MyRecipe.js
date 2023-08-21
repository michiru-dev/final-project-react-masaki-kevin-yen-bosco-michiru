import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromMyRecipes } from "@/store/slicers/myReceips";
import styled from "styled-components";
import { TiDelete } from "react-icons/ti";

function MyRecipes() {
  const myRecipes = useSelector((state) => state.recipes.recipes);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [showImage, setShowImage] = useState(false);

  const handleOnClick = (recipeId) => {
    dispatch(removeFromMyRecipes(recipeId));
  };
  const toggleImage = (recipeId, recipeImage) => {
    if (selectedImage === recipeImage) {
      setSelectedImage(null);
      setShowImage(false);
    } else {
      setSelectedImage(recipeImage);
      setShowImage(true);
    }
  };
  console.log(myRecipes);
  useEffect(() => {
    console.log("MyRecipes has changed:", myRecipes);
  }, [myRecipes]);

  //Style
  const MyRecipes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const MyRecipesTitle = styled.h2`
    font-size: 30px;
    margin: 20px;
  `;

  const MyRecipesUl = styled.ul`
    font-size: 15px;
    list-style-type: none;
    padding: 20px;
    margin: 0;
  `;

  const MyRecipesLi = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid;
    width: 500px;
    margin: 10px 0;
  `;

  const MyRecipesListTitle = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const MyRecipesRemoveBtn = styled.button`
    font-size: 15px;
    margin: 5px;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
  `;

  return (
    <MyRecipes>
      <MyRecipesTitle>My Recipes</MyRecipesTitle>
      <MyRecipesUl>
        {myRecipes &&
          myRecipes.map((recipe, index) => (
            <MyRecipesLi key={index}>
              <MyRecipesListTitle>{recipe.title}</MyRecipesListTitle>

              <button onClick={() => toggleImage(recipe.id, recipe.image)}>
                {showImage && selectedImage === recipe.image ? "Hide" : "Show"}
              </button>
              <MyRecipesRemoveBtn onClick={() => handleOnClick(recipe.id)}>
                <TiDelete size={25} />
              </MyRecipesRemoveBtn>
              {showImage && selectedImage === recipe.image && (
                <div>
                  <img src={selectedImage} alt={recipe.title} />
                </div>
              )}
            </MyRecipesLi>
          ))}
      </MyRecipesUl>
    </MyRecipes>
  );
}

export default MyRecipes;
