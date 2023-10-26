import React from 'react'
// import React, { useState } from 'react'
// import { useNavigate,Link  } from 'react-router-dom';
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../firebase';
import { Link } from "react-router-dom";



const Login = () => {
//     const [err,setErr] = useState(false)  
//   const navigate = useNavigate()

//   const handleSubmit =async (e) => {
//       e.preventDefault()
//       const email = e.target[0].value;
//       const password = e.target[1].value;
          
// try{

//   await signInWithEmailAndPassword(auth, email, password);
//   navigate("/");

// }catch(err){
// setErr(true);
// }

// };
return (
    <div className='formContainer'>
    <div className='formWrapper'>
    <span className="logo">Uday Chat</span>
    <span className="title">Login</span>
    <form className='inputForm'>
    
        <input required type="email" placeholder="email" className='inputPlaceholder' />
        <input required type="password" placeholder="password" className='inputPlaceholder' />
        
        <button className='Button'><Link to="/home">Sign in</Link></button>
        

    </form>
    <p className='Para'>You don't have an account?  <Link to="/">Register</Link></p>
    {/* <Link to="/home">Home</Link> */}
    </div>
    </div>
)
}

export default Login
