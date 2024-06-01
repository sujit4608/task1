import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import countries from '../data/countrycode.json';

const Template = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    showPassword: false,
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.phoneNo) {
      newErrors.phoneNo = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNo)) {
      newErrors.phoneNo = 'Phone Number must be 10 digits';
    }
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.panNo) newErrors.panNo = 'PAN Number is required';
    if (!formData.aadharNo) newErrors.aadharNo = 'Aadhar Number is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'country') {
      setFormData({ ...formData, country: value, city: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // history.push('/details', { formData });
    }
  };

  const togglePasswordVisibility = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const hardcodedCities = ["Pune", "Mumbai", "Delhi", "kolkatta", "chennai"];

  return (
    <div style={{ backgroundColor: '#2b3240', color: '#FFFFFF', minHeight: '100vh', padding: '20px' }}>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-gray-800 shadow-md rounded">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <div className="mb-4">
          <label className="block text-gray-300">First Name:</label>
          <input 
            type="text" 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Last Name:</label>
          <input 
            type="text" 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Username:</label>
          <input 
            type="text" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-300">Password:</label>
          <input 
            type={formData.showPassword ? 'text' : 'password'} 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
          />
          <button 
            type="button" 
            onClick={togglePasswordVisibility} 
            className="absolute right-3 top-2 text-gray-500"
          >
            {formData.showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Phone Number:</label>
          <input 
            type="tel" 
            name="phoneNo" 
            value={formData.phoneNo} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
          />
          {errors.phoneNo && <p className="text-red-500 text-sm">{errors.phoneNo}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Country:</label>
          <select 
            name="country" 
            value={formData.country} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
          >
            <option value="">Select Country</option>
            {countries.map(country => (
              <option key={country.name} value={country.name}>
                {country.name} ({country.code})
              </option>
            ))}
          </select>
          {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">City:</label>
          <select 
            name="city" 
            value={formData.city} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
          >
            <option value="">Select City</option>
            {hardcodedCities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">PAN Number:</label>
          <input 
            type="text" 
            name="panNo" 
            value={formData.panNo} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
          />
          {errors.panNo && <p className="text-red-500 text-sm">{errors.panNo}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Aadhar Number:</label>
          <input 
            type="text" 
            name="aadharNo" 
            value={formData.aadharNo} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
          />
          {errors.aadharNo && <p className="text-red-500 text-sm">{errors.aadharNo}</p>}
        </div>
        <button 
          type="submit" 
          disabled={isSubmitted} 
          className="w-full bg-blue-500 text-white py-2 rounded disabled:opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Template;
