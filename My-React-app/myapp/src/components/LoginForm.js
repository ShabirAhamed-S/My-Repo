import React from 'react';
import { Link } from 'react-router-dom';
import Field from './Field'

const formStyle = {
  margin: 'auto',
  padding: '10px',
  border: '1px solid #c9c9c9',
  borderRadius: '5px',
  background: '#f5f5f5',
  width: '220px',
  display: ''
};

const submitStyle = {
  margin: '10px 0 0 0',
  padding: '7px 10px',
  border: '1px solid #efffff',
  borderRadius: '3px',
  background: '#3085d6',
  width: '100%',
  fontSize: '15px',
  color: 'white',
  display: ''
};

const LoginForm = ({ onSubmit }) => {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value
    };
    onSubmit(data);
  };
  return (
    <div className="main">
      <div class="div-center">
        <div class="content">
          <form className="ui form" style={formStyle} onSubmit={handleSubmit} >
            <Field ref={usernameRef} label="Username:" type="text" />
            <Field ref={passwordRef} label="Password:" type="password" />
            <div>
              <Link to='/contactlist'>
                <button style={submitStyle} type="submit">Submit</button>
              </Link>
              {/* <button style={submitStyle} type="submit">Submit</button> */}
            </div>
            <hr />
            <button type="button" class="btn btn-link">Signup</button>
            <button type="button" class="btn btn-link">Reset Password</button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default LoginForm