import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='form-usuario'>
      <div className='contenedor-form sombra-dark'>
        <h1>Login</h1>
        <form onSubmit={handleOnSubmit}>
          <div className='campo-form'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              placeholder='Your e-mail'
              onChange={handleOnChange}
            />
          </div>

          <div className='campo-form'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              placeholder='Your password'
              onChange={handleOnChange}
            />
          </div>

          <div className='campo-form'>
            <input
              type='submit'
              className='btn btn-primario btn-block'
              value='Login'
            />
          </div>
        </form>

        <Link to='new-account' className='enlace-cuenta'>
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default Login;
