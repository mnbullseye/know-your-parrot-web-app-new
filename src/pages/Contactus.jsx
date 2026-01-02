import React, { useState } from 'react';
import './ContactUsStyle.css'; 

const ContactUs = () => {

  // --- State for Form Inputs ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id.toLowerCase()]: value
    }));
  };

  const validateContactForm = (e) => {
    e.preventDefault(); // Prevents page reload
    const { name, email, message } = formData;

    if (name.trim().length === 0) {
      alert("Name Error: Please enter your name.");
      return;
    }

    if (email.trim().length === 0 || !email.includes('@')) {
      alert("Email Error: Please enter a valid email address (must contain '@').");
      return;
    }

    const MAX_LENGTH = 200;
    if (message.length > MAX_LENGTH) {
      alert(`Message Error: Your message is too long. Please limit it to ${MAX_LENGTH} characters. You currently have ${message.length} characters.`);
      return;
    }

    alert("Form submitted successfully!");
    // Logic to send data to an API would go here
  };

  return (
    <div>
      <main>
        <section className="contacts">
          {/* Info Section */}
          <div className="info">
            <div>
              <h2><span className="fa-solid fa-location-dot"></span> Address</h2>
              <p>Office #204, Crescent Tower, Shahrah-e-Faisal, Karachi, Sindh 75350, Pakistan</p>
            </div>
            <div>
              <h2><span className="fa-solid fa-phone"></span> Phone Number</h2>
              <p>+92 000 0000000</p>
            </div>
            <div>
              <h2><span className="fa-solid fa-envelope"></span> Email</h2>
              <p>know1your2parrot3@gmail.com</p>
            </div>
          </div>

          {/* Form Section */}
          <form className="send-msg" onSubmit={validateContactForm}>
            <h1 className="head">Contact Us</h1>
            <input
              id="Name"
              className="input-field"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              id="Email"
              className="input-field"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <textarea
              id="Msg"
              className="input-field"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;