import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import './SignupLoginStyle.css';
import { useState } from "react";

function Signup () {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignup = () => {
        const { email, password, confirmPassword } = formData;
        if (!email) return alert("Email cannot be empty");
        if (password !== confirmPassword) return alert("Passwords do not match!");
        
        alert("Signup details are valid!");
    };

  return(
    <div id='main'>
      <h1>Login/Signup</h1>

      <section>
        <Link to="/login" id="log">Login</Link>
        <button className="join" id="sign">Signup</button>
      </section>

      <input id="Email" className="cont" name="Email" type="text" required placeholder="Email Address" onChange={handleChange}/>
      <input id="Password" className="cont" name="Password" type="text" required minlength={8} placeholder="Password" onChange={handleChange}/>
      <input id="ConfirmPassword" class="cont" type="text" name="Password" required minlength="8" placeholder="Confirm Password" onChange={handleChange}/>
      
      <button className="btn">{label.trim()}</button>
    </div>
  )
}
export default Signup;