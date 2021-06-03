import React, { useState } from 'react'

const LoginForm = () => {
  const title = "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
  const pattern = "(?=.*)(?=.*[a-z])(?=.*[A-Z]).{8,}";
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const [values, setValue] = useState({
    email: null,
    password: null,
    errors: {
      email: '',
      password: '',
    },
  })
  const validateForm = error => {
    let valid = true;
    Object.values(error).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (validateForm(values.errors)) {

      alert('Valid Form')
    } else {
      alert('Invalid Form')
    }
  }
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
    < >
      <form
        onSubmit={handleSubmit}
      >
        <label
          name="email"
        >UserName:</label>
        <input
          type='email'
          name='email'
          onChange={handleChange}
          noValidate />
        <label
          name="password"
        >Password:</label>
        <input
          type='password'
          name='password'
          title={title}
          pattern={pattern}
          onChange={handleChange}
          noValidate />
        <>
          <button
            value={'Submit'}
            type="submit"
          >Login</button>
        </ >
      </form>
    </>
  );
};


export default LoginForm