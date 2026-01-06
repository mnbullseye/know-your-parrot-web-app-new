import { Link, useNavigate } from "react-router-dom";
import './SignupLoginStyle.css'
import { useState } from "react";

function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    if (!email.includes('@')) {
      alert("Please enter a valid email.");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login Successful!");
        // Store user info or a token
        localStorage.setItem('userToken', data.token); 
        navigate("/");
      } else {
        // This triggers if the user is not in the DB or password is wrong
        alert(data.message || "Invalid email or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Server is not running!");
    }
  };

  return (
    <div className="auth-cont">
      <div id='main'>
        <h1 className="headings">Login/Signup</h1>
        <section>
          <button className="join" id="log">Login</button>
          <Link to="/signup" id="sign">Signup</Link>
        </section>

        <input 
          id="Email" 
          className="cont" 
          value={email}
          type="email" 
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
          id="Password" 
          className="cont" 
          value={password}
          type="password" 
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Link to="/" id="forgot">Forgot Password?</Link>
        <button className="btn" onClick={handleLogin}>Submit</button>
      </div>
    </div>
  );
}

export default Login;