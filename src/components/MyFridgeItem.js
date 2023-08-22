import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFridge } from '@/store/slicers/myFridge'
import {
  addmyFridgeIngredients,
  removemyFridgeIngredients,
} from '@/store/slicers/search'
import styled from 'styled-components'
import { FaDeleteLeft } from 'react-icons/fa6'
import useAuth from "../hooks/useAuth";

const MyFridgeItem = ({ item }) => {
  const user = useAuth();
  const items = useSelector((state) => state.search.myFridgeIngredients)
  const [isChecked, setIsChecked] = useState(items.includes(item))
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(removeFromFridge(item))
  }
  const handleCheckBox = () => {
    if (!user)  return;
    if (!isChecked) {
      dispatch(addmyFridgeIngredients(item))
    } else {
      dispatch(removemyFridgeIngredients(item))
    }
    setIsChecked(!isChecked)
  }

  //Style
  const ItemsLi = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid;
    width: 200px;
    margin: 10px 0;
  `

  const DeleteBtn = styled.button`
    font-size: 15px;
    margin: 5px;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
  `

  return (
    <div>
      <ItemsLi>
        <input
          id={`addFridgeItem-${item}`}
          type='checkbox'
          checked={isChecked}
          onChange={() => handleCheckBox()}
          disabled={!user}
        />
        <label for={`addFridgeItem-${item}`}>{item}</label>
        <DeleteBtn onClick={() => handleDelete()}>
          <FaDeleteLeft />
        </DeleteBtn>
      </ItemsLi>
    </div>
  )
}

export default MyFridgeItem
