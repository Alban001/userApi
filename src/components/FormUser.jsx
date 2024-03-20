import React, {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import '../styles/formUer.css'

const FormUser = ({userID,createUser , userEdit, setuserEdit, updateUser, setFormBool,formBool}) => {

    const {handleSubmit, register, reset} = useForm()

    useEffect(()=>{
      reset(userEdit)
     },[userEdit])

  const submit =data=>{
    if(userEdit){
      updateUser('/users/',userEdit.id,data)
      setuserEdit()
      setFormBool(!formBool)
    }else{
      createUser('users',data)
    }
    reset({
      email:'',
      password:'',
      first_name:'',
      last_name:'',
    })
   }
  

  return (
    <div className='form-user' >
        <form onSubmit={handleSubmit(submit)}>
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
    
  )
}

export default FormUser