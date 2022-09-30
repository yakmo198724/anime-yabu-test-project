import React from 'react'
import '../Style/LogIn.css';
import { useState } from "react";


const LogIn = () => {

  // Initialize a boolean state
  const [passwordShown, setPasswordShown ] = useState(false);
  const [passwordShownNew, setPasswordShownNew ] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
      // When the handler is invoked
      // inverse the boolean state of passwordShown
      setPasswordShown(!passwordShown);
    };

    const togglePasswordNew = () => {
      // When the handler is invoked
      // inverse the boolean state of passwordShown
      setPasswordShownNew(!passwordShownNew);
    };

    
  return (
    <div className='navbar'>
      <div className='header-section'>
      <img src="/images/Logo.png" alt=''/>
      <h4>anime<span className='heading-clickable'>yabu</span>.</h4>
      </div>
      <div className='back-link'>
      <img src="/images/Back-Icon.png" alt=''/>
      </div>
      <div className='form-container'>
      <img src="/images/kisumi-mask.png" alt=''/>
      <h2>ようこそ!</h2>
      <p>Bem-vindo(a)!</p>
      </div>
      <div className='password-field01'>
      <div>
      <div className='input-01'>
      <p>Email </p>
      <input type="email" id="email" name="email"/>
      </div>
      <div className='input-02'>
      <p>Senha</p>
      <input type={passwordShown ? "text" : "password"} />
      <img src="/images/The-EyeII.png" alt='' onClick={togglePassword} />
      </div>
      <div className='input-03'>
      <p>Confirmar Senha</p>
      <input type={passwordShownNew ? "text" : "password"} />
      <img src="/images/The-EyeII.png" alt='' onClick={togglePasswordNew} />
      </div>
      <button className='button-01'><strong>Registrar</strong></button>
      <div className='flex-container01'>
      <div className='shapes-01'></div>
      <div><p>Ou se registre com</p></div>
      <div className='shapes-02'></div>
      </div>
      
      <div className='flex-container02'>
      <img className='sm-icon1' src="/images/facebook.png" alt=''/>
      <img className='sm-icon2' src="/images/twitter.png" alt=''/>
      <img className='sm-icon3' src="/images/Insta.png" alt=''/>
      <p>Já é membro? <span>Faça Login</span></p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default LogIn
