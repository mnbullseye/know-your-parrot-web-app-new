import { Link } from "react-router-dom";
import './SignupLoginStyle.css';
import { useState } from "react";

function Signup () {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    const { email, password, confirmPassword } = formData;

    if (password.trim !== confirmPassword.trim) return alert("Passwords do not match");

    try {
        // We use 'fetch' to send data to our server on Port 5000
        const response = await fetch('http://localhost:5000/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message);
            navigate("/login");
        } else {
            alert(data.message || "Something went wrong");
        }
    } catch (error) {
        console.error("Error during signup:", error);
        alert("Server is not running!");
    }
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