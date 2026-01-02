import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import './SignupLoginStyle.css'
import { useState } from "react";

function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email.includes('@')) {
      alert("Email Error: Please enter a valid email address.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
        alert("Password Error: Your password must contain at least one capital letter.");
        return;
    }
    alert("Validation Successful! Submitting form...");
  };

  return(
    <div id='main'>
      <h1>Login/Signup</h1>
      <section>
        <button className="join" id="log">Login</button>
        <Link to="/signup" id="sign">Signup</Link>
      </section>

      <input 
        id="Email" 
        className="cont" 
        value= {email}
        type="text" 
        placeholder="Email Address"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input 
        id="Password" 
        className="cont" 
        value={password}
        type="text" 
        minlength={8} 
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Link to="/" id="forgot">Forgot Password?</Link>

      <button className="btn">{label.trim()}</button>
    </div>
  )
}
export default Login;