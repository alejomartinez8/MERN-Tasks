import React from 'react';

const Login = () => {
  const handleOnChange = () => {};
  return (
    <div className='form-usuario'>
      <div className='contenedor-form sombra-dark'>
        <h1>Iniciar Sesión</h1>
        <form>
          <div className='campo-form'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' placeholder='Your e-mail' onChange={handleOnChange} />
          </div>

          <div className='campo-form'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='password' placeholder='Your password' onChange={handleOnChange} />
          </div>

          <div className='campo-form'>
            <input type='submit' className='btn btn-primario btn-block' value='Login' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
