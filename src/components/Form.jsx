import { useState } from "react"
import {useNavigate} from 'react-router-dom'
 
const Form = ()=>{

    const navigate= useNavigate()
    const [form, setForm]= useState({
        email:'',
        password:''
    })

    const [errors, setErrors]=useState({
        email:'',
        password:''
    })

    const handleOnChange = (event)=>{
        setForm({
            ...form,
            [event.target.name]:event.target.value
        })
        setErrors(validate())
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        navigate('/home')
    }
    const validate=()=>{
        const error= {}
        if(!/\S+@\S+\.\S+/.test(form.email)){
            error.email='no es un email válido'
        }
        if(form.password.length < 6){
            error.password='debe tener minmo 6 caracteres'
        }
        return error
}

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="Email">Email:</label>
            <input type="text" name='Email' value={form.email} onChange={handleOnChange}/>
            {errors.emal && <span>{errors.email}</span>}
            <hr />
            <label htmlFor="Password">Password</label>
            <input type="text" name='Password' value={form.password} onChange={handleOnChange}/>
            {errors.password && <span>{errors.password}</span>}
            <hr />
            <button type='submit'>Log in</button>
        </form>
    )
}

export default Form;
