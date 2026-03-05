import { useState } from "react";
import "./CreateProfile.css";

function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    skills: "",
    about: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    alert(data.message);
  };

  return (
    <div className="profile-container">

      <h2>Create Your Profile</h2>

      <form className="profile-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="City or State"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Experience Level</label>

          <div className="radio-group">

            <label>
              <input
                type="radio"
                name="experience"
                value="fresher"
                onChange={handleChange}
                required
              />
              Fresher
            </label>

            <label>
              <input
                type="radio"
                name="experience"
                value="experienced"
                onChange={handleChange}
              />
              Experienced
            </label>

          </div>
        </div>

        <div className="form-group">
          <label>Skills</label>
          <input
            type="text"
            name="skills"
            placeholder="e.g. Java, React, SQL"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>About You</label>
          <textarea
            rows="4"
            name="about"
            placeholder="Short description about yourself"
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="profile-btn">
          Create Profile
        </button>

      </form>

    </div>
  );
}

export default Register;