import { Link } from "react-router-dom";
import './SignupLoginStyle.css'
import { useState } from "react";

function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 1. Validation
    if (!email.includes('@')) {
      alert("Please enter a valid email.");
      return;
    }

    // 2. Get users from "Database"
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // 3. Find matching user
    const user = existingUsers.find(u => u.email === email && u.password === password);

    if (user) {
      alert("Login Successful!");
      // Optional: Save the "logged in" state
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate("/");
    } else {
      alert("Invalid email or password.");
    }
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

      <button className="btn" onClick={handleLogin}>Submit</button>
    </div>
  )
}
export default Login;