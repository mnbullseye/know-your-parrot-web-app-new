import { Link } from "react-router-dom";
import './SignupLoginStyle.css';
import { useState } from "react";

function Signup () {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    const { email, password, checkPassword } = formData;

    // Basic Validations
    if (email == '' || password == '') return alert("Fields cannot be empty");
    if (password !== checkPassword) return alert("Passwords do not match!");

    // 1. Get existing users (or an empty array if none exist)
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // 2. Check if user already exists
    const userExists = existingUsers.some(user => user.email === email);
    if (userExists) {
      alert("User already exists! Please login.");
      return;
    }
    // 3. Add new user and save
    const newUser = { email, password };
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    alert("Signup Successful!");
    navigate("/login");
  };

  return(
    <div id='main'>
      <h1>Login/Signup</h1>

      <section>
        <Link to="/login" id="log">Login</Link>
        <button className="join" id="sign">Signup</button>
      </section>

      <input id="Email" className="cont" name="email" type="text" required placeholder="Email Address" onChange={handleChange}/>
      <input id="Password" className="cont" name="password" type="text" required minlength={8} placeholder="Password" onChange={handleChange}/>
      <input id="ConfirmPassword" class="cont" type="text" name="checkPassword" required minlength="8" placeholder="Confirm Password" onChange={handleChange}/>
      
      <button className="btn" onClick={handleSignup}>Submit</button>
    </div>
  )
}
export default Signup;