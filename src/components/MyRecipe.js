import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { removeFromMyRecipes } from '@/store/slicers/myReceips'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp,faCircleXmark   } from '@fortawesome/free-solid-svg-icons';


function MyRecipes() {
    const myRecipes = useSelector(state => state.recipes.recipes);
    const dispatch = useDispatch()
    const [selectedImage, setSelectedImage] = useState(null);
    const [showImage, setShowImage] = useState(false);

    const handleOnClick = (recipeId) => {
      dispatch(removeFromMyRecipes(recipeId))
    } 
    const toggleImage = (recipeId, recipeImage) => {
        if (selectedImage === recipeImage) {
            setSelectedImage(null);
            setShowImage(false);
        } else {
            setSelectedImage(recipeImage);
            setShowImage(true);
        }}
    console.log(myRecipes)
    useEffect(() => {
    
        console.log('MyRecipes has changed:', myRecipes);
    }, [myRecipes]);
 
    const MyRecipesContainer = styled.div`
    display:flex;
    flex-direction:column;
    font-family: Arial;
    background-color: #f7f7f7;
    padding: 20px;
    flex: 1;
  margin-left: 20px;
  align-items: center;
  `;
  
  const RecipeTitle = styled.p`
    margin: 0;
    flex: 1;
  `;
  
  const RemoveButton = styled.button`
    border: none;
    background:none;
    padding: 5px 10px;
    cursor: pointer;
    margin-right: 10px;
    border-radius: 5px; 
  `;
  
  const ToggleImageButton = styled.button`
  border:none;
  background:none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px; 
  `;
  
  const RecipeImage = styled.img`
    display: block;
    max-width: 100%;
    margin-top: 10px;
  `; 
    return (
        <MyRecipesContainer>
      <h2>My Recipes</h2>
      <ul>
        {myRecipes && myRecipes.map((recipe, index) => (
          <li key={index}>
          <RecipeTitle>{recipe.title}<RemoveButton onClick={() => handleOnClick(recipe.id)}><FontAwesomeIcon icon={faCircleXmark  } /></RemoveButton></RecipeTitle>
          
          <ToggleImageButton onClick={() => toggleImage(recipe.id, recipe.image)}>
            {showImage && selectedImage === recipe.image ? (
              <FontAwesomeIcon icon={faAngleUp} className="bounce"/>
            ) : (
              <FontAwesomeIcon icon={faAngleDown} className="bounce" />

            )}
          </ToggleImageButton>
          {showImage && selectedImage === recipe.image && (
            <div>
              <RecipeImage src={selectedImage} alt={recipe.title} />
            </div>
          )}
        </li>
        
        ))}
      </ul>
    </MyRecipesContainer>
    );
}

export default MyRecipes;
