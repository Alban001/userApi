import React from 'react'
import '../styles/card.css'
import { FaTrash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";


const UserCard = ({user, deleteUser , cardId, userEdit, setuserEdit}) => {
  
  const handleDelete=()=>{
    deleteUser('/users/',cardId)
    
  }
  const handleEdit=()=>{
    setuserEdit(user)
  }
  return (
    <div className='card'>
         <div className='title-card'>
         <li><span><h2>{user.first_name}<span>   {user.last_name}</span></h2></span></li>
         </div>
         <div className='content-card'>
         <li><span><p>Email: </p></span>{user.email}</li>
         </div>
        <div className='button-card'>
            <button onClick={handleDelete} id='trash'><FaTrash/></button>
            <button onClick={handleEdit} id='edit'><CiEdit/></button>
        </div>
    </div>
  )
}

export default UserCard