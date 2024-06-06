import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { get_menu_item } from '@/store/menu-items/menuItems-thunks'

const SingleMenuItem = () => {
    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        
    }, [])
  return (
    <div>SingleMenuItem</div>
  )
}

export default SingleMenuItem