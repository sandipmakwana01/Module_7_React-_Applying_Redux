import React, { useState } from 'react';

const RegistrationForm = () => {
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });

  
  const [errors, setErrors] = useState({});

  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateInputs(formData);
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      
      console.log('Form submitted:', formData);
    }
  };

 
  const validateInputs = (data) => {
    let errors = {};
    const { username, email } = data;

   
    if (username.length > 4) {
      errors.username = 'Username must be less than or equal to 4 characters';
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = 'Invalid email format';
    }

    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
