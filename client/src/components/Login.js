import axios from 'axios';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Required CSS
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post('https://user-authentication-and-authorization-6.onrender.com/api/auth/login', {
        email,
        password
      });
      toast.success(res.data.message || "Login successful");
    } catch (err) {
      setHasError(true);
      toast.error(err.response?.data?.message || "Login failed");
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
          maxWidth: "400px",
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
          marginBottom: "20px",
          fontSize: "2rem"
        }}>
          Login
        </h1>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setHasError(false)}
          placeholder="Enter your email"
          className={`styled-input ${hasError ? "error" : ""}`}
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

        <div style={{ position: 'relative' }}>
          <input
            type={isShowPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setHasError(false)}
            placeholder="Enter your password"
            className={`styled-input ${hasError ? "error" : ""}`}
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
              transition: "all 0.3s ease-in-out"
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

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#2196f3" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogin}
          style={{
            width: "100%",
            marginTop: "25px",
            padding: "12px",
            border: "none",
            borderRadius: "10px",
            backgroundColor: "#1976d2",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background 0.4s ease"
          }}
        >
          Login
        </motion.button>
          <p style={{ color: "white", marginTop: "15px", textAlign: "center" }}>
        Don't have an account? <Link to="/register" style={{ color: "#4fc3f7", textDecoration: "none" }}>Register here</Link>
      </p>
      </motion.div>
    

    </div>
  );
};

export default Login;
