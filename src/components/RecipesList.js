import React from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addToMyRecipes } from '@/store/slicers/myReceips'
import styled from 'styled-components';

function RecipesList({ recipes }) {
  const dispatch = useDispatch()
  const handleOnClick = (recipe) => {
    dispatch(addToMyRecipes(recipe))
  }

  const RecipeContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width:12rem;
`;

const RecipeTitle = styled.h3`
  margin: 0;
`;  

const RecipeImage = styled.img`
  display: block;
  max-width: 200px;
  max-height: 200px;
  margin-top: 10px; 
`;

const AddButton = styled.button`
border: 1px solid black;
border-radius: 5px; 
  padding: 5px 10px;
  cursor: pointer;
`;
const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px; 

`;
  return (
    <Div>
      {recipes&&recipes.map((recipe) => {
        return (
          <RecipeContainer key={recipe.id}>
          <RecipeTitle>{recipe.title}</RecipeTitle>
          <div>
            <RecipeImage
              src={recipe.image}
              alt={recipe.title}
            />
          </div>
          <AddButton
            onClick={() => {
              handleOnClick(recipe); 
            }}
          >
            Add
          </AddButton>
        </RecipeContainer>
        )
      })}
    </Div>
  )
}

export default RecipesList
