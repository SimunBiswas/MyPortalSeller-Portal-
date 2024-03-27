import React, { useState } from 'react';
import validator  from 'validator';
import ReCAPTCHA from 'react-google-recaptcha';
import PhoneInput from 'react-phone-number-input';
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import 'react-phone-number-input/style.css'


import './signup.css'

function Signupp() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);

    
    setIsValidPhoneNumber(value && value.length === 13); 
  };
  

 const [email, setEmail] = useState('');
  const[emailError, setEmailError]=useState('')
  const validateEmail = (value) => {
    setEmail(value);
    if (validator.isEmail(value)) {
      setEmailError('');
    } else {
      setEmailError('Enter valid Email!');
    }
  };
 
 

  
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  
  const handleShowPassword=()=>
  {
    setShowPassword(!showPassword);
  }
  const handlePasswordChange = (value) => {
    setPassword(value);
    if (!validator.isLength(value, { min: 8 })) {
      setPasswordError('Password must be at least 8 characters long');
    } else if (!/\d/.test(value)) {
      setPasswordError('Password must contain at least one digit');
    } else if (!/[a-z]/.test(value)) {
      setPasswordError('Password must contain at least one lowercase letter');
    } else if (!/[A-Z]/.test(value)) {
      setPasswordError('Password must contain at least one uppercase letter');
    } else if (!/[^a-zA-Z0-9]/.test(value)) {
      setPasswordError('Password must contain at least one special character');
    } else {
      setPasswordError('');
    }
  };
  const [error,setError]=useState('');
  const handleFormSubmit=(event)=>{
    event.preventDefault();

    if (!isValidPhoneNumber) {
      setError('Enter valid number');
    } else if (emailError) {
      setError('Enter valid email');
    } else if (passwordError) {
      setError('Enter valid password.');
    } else {
      setError('');
      alert('Account created Successfully');
      // Reset the form after successful submission
      setPhoneNumber('');
      setIsValidPhoneNumber(false);
      setEmail('');
      setEmailError('');
      setPassword('');
      setShowPassword(false);
      setPasswordError('');
      setCaptchaValue(null);
    }

  };
  const [captchaValue , setCaptchaValue] = useState(null);
  const handleCaptchaChange=(value)=>{
    setCaptchaValue(true);

  }; 
 
  
  return (

    <div className='form_container  text-center'><img src={require('./images/logorevogue.jpeg')} alt="Logo" className='rounded'/><h3 className='text-center'><b>New at Revogue?<br/> <u>Signup!</u><a href='/'>Login</a></b></h3>
         <div className='form_container  rounded '>
        
        <form className='p-5' onSubmit={handleFormSubmit} >
       
        <div className='mb-2'>
        
        <label htmlFor='mob' >ENTER MOBILE NUMBER </label>
        <PhoneInput
        international
        defaultCountry="IN"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        className='form-control'
      />
      {!isValidPhoneNumber && (
        <p style={{ fontWeight:'bold',color: 'red' }}>Please enter a valid phone number</p>
      )}
               
               <button className='btn btn-primary'>Send OTP</button> 
               
               
             
           </div>
       
           <div className='mb-2'>
              <label htmlFor='otp'>ENTER OTP</label>
             <input type='text' placeholder='Enter OTP' className='form-control'/>we have sent an otp in your mobile number.
             </div>
            

           <div className='mb-2'>
              <label htmlFor='email'>EMAIL ID</label>
              <input type='email' placeholder='Enter Email'  value={email} onChange={(e)=>validateEmail(e.target.value)} 
             
             className='form-control' />
              
            
              <p style={{fontWeight:'bold',color:'red'}}>{emailError}</p>
            </div>

            <div className='mb-2 '>
            <label htmlFor="password">SET PASSWORD</label>
              <div className='password-input-container'>
            <input  type={showPassword?"password":'text'} placeholder='Enter Password' onChange={(e) => handlePasswordChange(e.target.value)}  className='form-control' value={password} />
            
            {showPassword?(
              <IoEyeOffOutline onClick={handleShowPassword}/>):(
              <IoEyeOutline onClick={handleShowPassword}/>
            )}
           </div>
            Password needs to be minimum of 8 characters, atleast one lowercase letter and uppercase letter and atleast one special character.
                <p style={{fontWeight:'bold',color:'red'}}>{passwordError}</p>
            </div>
            
          <div className="pt-2">
           <input type='checkbox' className='custom-control custom-checkbox' id='check'/>
                <label htmlFor='check' className='custom-input-label ms-2'>I want to receive important updates on WhatsApp.</label>
           </div>
           <br/>
           <div className='mb-2 captcha'>
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={handleCaptchaChange}
              />
              {captchaValue && <p>CAPTCHA Verified!</p>}
              </div>

           <br/>
           <button className='btn btn-primary p-2' disabled={!(captchaValue && phoneNumber && email && password )}>Create Account</button>
           <br/>
           {error &&<p style={{fontWeight:'bold',color:'red'}}>{error}</p>}
           </form>
          
    </div>  
    
</div>
  )
}

export default Signupp