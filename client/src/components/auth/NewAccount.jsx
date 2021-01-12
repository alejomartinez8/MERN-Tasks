import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewAccount = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirm: ''
  });

  const { name, email, password, confirm } = user;

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
        <h1>New Account</h1>
        <form onSubmit={handleOnSubmit}>
          <div className='campo-form'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              placeholder='Your name'
              onChange={handleOnChange}
            />
          </div>
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
            <label htmlFor='confirm'>Confirm password</label>
            <input
              type='password'
              id='confirm'
              name='confirm'
              value={confirm}
              placeholder='Confirm password'
              onChange={handleOnChange}
            />
          </div>

          <div className='campo-form'>
            <input
              type='submit'
              className='btn btn-primario btn-block'
              value='Register'
            />
          </div>
        </form>

        <Link to='/' className='enlace-cuenta'>
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default NewAccount;
