import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import { set } from 'react-hook-form'


function App() {
  const BASEURL= 'https://users-crud.academlo.tech/'
  
  const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(BASEURL)

  const [userEdit, setuserEdit] = useState()

  const [modal, setmodal] = useState(false)

  const handleBtnClick =()=>{
      setmodal(!modal)
  }

  useEffect(()=>{
    getUsers('users')
 
  },[])

  return (
    <div className='container'>
       <nav>
        <h1>Usuarios</h1>
        <button onClick={handleBtnClick}>Agregar nuevo usuario</button></nav>
        <div className='form-container'>
           {
            modal ? <FormUser userEdit={userEdit} setuserEdit={setuserEdit} updateUser={updateUser} createUser={createUser}modal={modal} setmodal={setmodal}/> : ''
           }
        </div>
        
      <div className='card-container'>
        {
          users?.map(item =>(
            <UserCard key={item.id} modal={modal} setmodal={setmodal} user={item} deleteUser={deleteUser} cardId={item.id} userEdit={userEdit} setuserEdit={setuserEdit} updateUser={updateUser} />
          ))
        }
      </div>
    </div>
  )
}

export default App
