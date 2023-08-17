import { createSlice } from '@reduxjs/toolkit'

const getInitailState = () => {
  if (typeof window === 'undefined') return []
  return localStorage.getItem('recipes') ?? []
}

const initialState = {
  recipes: [],
}
export const myReceipsSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addToMyRecipes: (state, action) => {
      //check if the recipe already exsits
      const recipe = state.recipes.find(
        (recipe) => recipe.id === action.payload.id
      )
      if (recipe) return
      state.recipes.push(action.payload)

      localStorage.setItem('recipes', JSON.stringify(state.recipes))
    },
    removeFromMyRecipes: (state, action) => {
      state.recipes = state.recipes.filter(
        (item) => item.id !== action.payload.id
      )
      localStorage.setItem('recipes', JSON.stringify(state.recipes))
    },
    setDataFromStorage: (state) => {
      if (!state.recipes.length) {
        const data = localStorage.getItem('recipes')
        if (data) {
          state.recipes = JSON.parse(data)
        }
      }
    },
  },
})

export const { addToMyRecipes, removeFromMyRecipes, setDataFromStorage } =
  myReceipsSlice.actions
export default myReceipsSlice.reducer
