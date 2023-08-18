import React, { useState } from 'react'
import { axiosInstance } from '@/axios'
import styled from 'styled-components';

function SearchInput({ setRecipes }) {
  const [searchString, setSearchString] = useState()

  const handleOnChange = (e) => {
    setSearchString(e.target.value)
  }

  const handleOnClick = async () => {
    await axiosInstance
      .get(
        `recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_APIKEY}&fillIngredients=true&query=${searchString}&number=12`
      )
      .then((res) => setRecipes(res.data.results))

      .catch((err) => console.log(err))
  }
  const Div = styled.div`
  display: flex;
flex-direction:row;
`;
  return (
    <Div>
      <input  placeholder="Search For Recipes" onChange={(e) => handleOnChange(e)} />
      <button onClick={handleOnClick}>Search</button>
    </Div>
  )
}

export default SearchInput
