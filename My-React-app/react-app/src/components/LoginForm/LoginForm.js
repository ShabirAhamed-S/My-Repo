import React, { useState, useRef } from 'react'
import Field from './Field';
import { title, pattern, validEmailRegex } from '../constants/constant'

const LoginForm = () => {
  const [values, setValue] = useState({
    email: '',
    password: '',
    errors: {
      email: '',
      password: '',
    },
  })
  // check if email and password length is greater than 0  return true else true
  const validateForm = error => {
    let valid = true;
    Object.values(error).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };
  // Check email and password is valid or not
  const handleSubmit = event => {
    event.preventDefault();
    (validateForm(values.errors) && (values.email != '' && values.password != '')) ?
      alert('Valid Form') :
      alert('Invalid Form')
  }
  // When change of login email and password it checks is valid or not
  const handleChange = e => {
    const { name, value } = e.target
    let errors = values.errors;
    switch (name) {
      case 'email':
        errors.email =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password':
        errors.password =
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
        break;
      default:
        break;
    }
    setValue({ errors, [name]: value })
  }
  return (
    <form
      onSubmit={handleSubmit}
    >
      <Field
        name={"email"}
        label={"UserName:"}
        type={'email'}
        handleChange={handleChange}
      />
      <Field
        name={"password"}
        label={"Password:"}
        type={"password"}
        id={'show'}
        title={title}
        pattern={pattern}
        handleChange={handleChange}
      />
      <input
        type='checkbox'
        // onChange={showText()}
      />show password

      <button
        value={'Submit'}
        type="submit"
      >
        Login
          </button>
    </form>
  );
};


export default LoginForm