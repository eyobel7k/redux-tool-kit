import React from 'react'
import{useDispatch}from "react-redux"
import {setModalVissible}from "../Utils/appSlice"

function Modal({children}) {
  const dispatch = useDispatch()
  return (
    <div className="modal">
      <div className='modal-content'>
         <button className="close" onClick={()=>dispatch(setModalVissible(false))}>X</button>
         {children}
      </div>
    </div>
  )
}
export default Modal