import React, {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import '../styles/formUer.css'

const FormUser = ({createUser , userEdit, setuserEdit, updateUser, modal, setmodal}) => {

    const {handleSubmit, register, reset} = useForm()

    const handleClick=()=>{
      setmodal(!modal)
    }

    useEffect(()=>{
      reset(userEdit)
     },[userEdit])

  const submit =data=>{
    if(userEdit){
      updateUser('/users/',userEdit.id,data)
      setuserEdit()
      setmodal(!modal)
     
    }else{
      createUser('users',data)
      setmodal(!modal)
    }
    reset({
      email:'',
      password:'',
      first_name:'',
      last_name:'',
    })
   }
  

  return (
    <div className='form-modal'>
        <div className='form-user' >
        <form onSubmit={handleSubmit(submit)}>
          <div className='close-container'>
          <button onClick={handleClick}>X</button>
          </div>
        
        <label >Email: </label>
        <input type="text" {...register('email')}/>
        <label >Passowrd: </label>
        <input type="password" {...register('password')}/>
        <label >First Name: </label>
        <input type="text" {...register('first_name')}/>
        <label >Last Name: </label>
        <input type="text" {...register('last_name')}/>
        <button>Submit</button>
    </form>
    </div>
    </div>
    
  )
}

export default FormUser