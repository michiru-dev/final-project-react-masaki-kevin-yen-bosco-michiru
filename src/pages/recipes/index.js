import Head from 'next/head'
import Header from '../../components/Header'
import SearchInput from '@/components/SearchInput'
import { useState } from 'react'
import RecipesList from '@/components/RecipesList'
import MyFridge from '@/components/MyFridge'
import { axiosInstance } from '@/axios'
import MyRecipes from '@/components/MyRecipe'
import styled from 'styled-components';

export const getStaticProps = async () => {
  try {
    const initialRecipes = await axiosInstance
      .get(
        `recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_APIKEY}&number=2&fillIngredients=true`
      )
      .then((res) => res.data.results)

    return {
      props: {
        initialRecipes,
      },
    }
  } catch (err) {
    console.log('API not working', err)
    return {
      props: {
        recipes: [],
      },
    }
  }
}
const StyledDiv = styled.div`
  display: flex;
flex-direction:column;
align-items:center;
`;
const Div = styled.div`
  display: flex;
flex-direction:row;
`;
export default function Recipes({ initialRecipes }) {
  const [recipes, setRecipes] = useState(initialRecipes)

  return (
    <>
      <Head>
        <title>Recipes</title>
      </Head>
      <Header />
      <div>Recipes</div>
      <MyFridge />
      <StyledDiv>
        <SearchInput setRecipes={setRecipes} />
      <Div>
      <RecipesList recipes={recipes} />
      <MyRecipes />
      </Div>
      </StyledDiv>
    </>
  )
}
