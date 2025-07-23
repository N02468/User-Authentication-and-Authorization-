import axios from 'axios';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // 💡 Required CSS
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phoneNumber: '',
    cnic: '',
    address: '',
    password: '',
    role: 'user'
  });

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [hasError, setHasError] = useState(false);

  const toggleShowPassword = () => setIsShowPassword(prev => !prev);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id || e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      toast.success(res.data.message || "Registration successful");
    } catch (err) {
      setHasError(true);
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

      <motion.div
        className="custom-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          width: "100%",
          maxWidth: "450px",
          padding: "30px",
          background: "#1e1e2f",
          borderRadius: "20px",
          boxShadow: "0 0 30px rgba(0,0,0,0.3)"
        }}
      >
        <h1 style={{
          textAlign: "center",
          color: "#ffffff",
          fontFamily: "Comic Neue, cursive",
          fontWeight: "bold",
          marginBottom: "25px",
          fontSize: "2rem"
        }}>
          Register
        </h1>

        {['name', 'username', 'email', 'phoneNumber', 'cnic', 'address'].map((field, idx) => (
          <input
            key={idx}
            type="text"
            id={field}
            value={formData[field]}
            onChange={handleChange}
            onFocus={() => setHasError(false)}
            placeholder={`Enter your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
            className={`styled-input ${hasError ? 'error' : ''}`}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "10px",
              border: "none",
              outline: "none",
              fontSize: "16px",
              background: "#2e2e3e",
              color: "white",
              transition: "all 0.3s ease-in-out"
            }}
          />
        ))}

        {/* Password Field */}
        <div style={{ position: 'relative' }}>
          <input
            type={isShowPassword ? "text" : "password"}
            id="password"
            value={formData.password}
            onChange={handleChange}
            onFocus={() => setHasError(false)}
            placeholder="Enter your Password"
            style={{
              width: "100%",
              padding: "12px",
              paddingRight: "40px",
              borderRadius: "10px",
              border: "none",
              outline: "none",
              fontSize: "16px",
              background: "#2e2e3e",
              color: "white",
              transition: "all 0.3s ease-in-out",
              marginBottom: "20px"
            }}
          />
          <span
            onClick={toggleShowPassword}
            style={{
              position: 'absolute',
              top: '50%',
              right: '12px',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              color: '#4fc3f7'
            }}
          >
            {isShowPassword ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
          </span>
        </div>

        {/* Role Dropdown */}
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            fontSize: "16px",
            background: "#2e2e3e",
            color: "white"
          }}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="analyst">Analyst</option>
        </select>

        <motion.button
          onClick={handleSubmit}
          whileHover={{ scale: 1.05, backgroundColor: "#1e88e5" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{
            width: "100%",
            padding: "12px",
            background: "linear-gradient(135deg, #2196F3, #1E88E5)",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.1rem",
            border: "none",
            borderRadius: "12px",
            boxShadow: "0px 5px 15px rgba(33, 150, 243, 0.4)",
            cursor: "pointer"
          }}
        >
          Register
        </motion.button>
         <p style={{ color: "white", marginTop: "15px", textAlign: "center" }}>
        Already have an account? <Link to="/login" style={{ color: "#4fc3f7", textDecoration: "none" }}>Login here</Link>
      </p>
      </motion.div>
     

    </div>
  );
};

export default Register;
