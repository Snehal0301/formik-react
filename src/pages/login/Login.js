import React, { useState } from 'react'
import '../../common/Auth.css'
import Input from '../../components/input/Input'

const Login = () => {
  const [value, setValue] = useState({
    username: '',
    email: '',
    password: '',
    cpassword: ''
  })
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValue((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleForm = (e) => {
    e.preventDefault()
    console.log(value)
  }
  return (
    <>
      <form className='form' onSubmit={handleForm}>
        <p>Login</p>
        <Input type="email" label="Email" name="email" value={value.email} onchange={(e) => handleChange(e)} />
        <Input type="password" label="Password" name="password" value={value.password} onchange={handleChange} />
        <button>Login</button>
      </form>
    </>
  )
}

export default Login