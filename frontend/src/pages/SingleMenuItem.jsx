import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { get_menu_item } from '@/store/menu-items/menuItems-thunks'

const SingleMenuItem = () => {
    const {menu_item} = useSelector((state) => state.menuItem)
    const {item_id} = useParams()
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(get_menu_item(item_id))
    }, [])
  return (
    <div>SingleMenuItem</div>
  )
}

export default SingleMenuItem