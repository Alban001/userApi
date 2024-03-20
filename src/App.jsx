import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'


function App() {
  const BASEURL= 'https://users-crud.academlo.tech/'
  
  const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(BASEURL)

  const [userEdit, setuserEdit] = useState()
  const [formBool, setFormBool] = useState(false)

  useEffect(()=>{
    getUsers('users')
 
  },[])
 const handleTouch =()=>{
     setFormBool(!formBool)
 }
  return (
    <div className='container'>
       <nav>
        <h1>Usuarios</h1>
        <button onClick={handleTouch}>Agregar nuevo usuario</button></nav>
        <div className='form-container'>
        {
          formBool ? <FormUser setFormBool={setFormBool} formBool={formBool} userID={users.id} userEdit={userEdit} setuserEdit={setuserEdit} updateUser={updateUser} createUser={createUser}/> : ''
        }
        </div>
        
      <div className='card-container'>
        {
          users?.map(item =>(
            <UserCard key={item.id} formBool={formBool} setFormBool={setFormBool} user={item} deleteUser={deleteUser} cardId={item.id} userEdit={userEdit} setuserEdit={setuserEdit} updateUser={updateUser} />
          ))
        }
      </div>
    </div>
  )
}

export default App
