import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    setError("");
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!formData.name.trim()) {
      setError("Name is required");
      return;
    }
    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email");
      return;
    }
    if (!validatePhone(formData.phone)) {
      setError("Phone number must be 10 digits");
      return;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3002/signup", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        // Redirect to dashboard
        setTimeout(() => {
          window.location.href = "/dashboard/home";
        }, 500);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed. Try again!");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(loginData.email)) {
      setError("Please enter a valid email");
      return;
    }
    if (!loginData.password) {
      setError("Password is required");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3002/login", {
        email: loginData.email,
        password: loginData.password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        // Redirect to dashboard
        setTimeout(() => {
          window.location.href = "/dashboard/home";
        }, 500);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Check credentials!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        {!isLogin ? (
          <>
            <div className="signup-header">
              <h1>Create Account</h1>
              <p>Join Zerodha and start investing</p>
            </div>

            <form onSubmit={handleSignup}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleSignupChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleSignupChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleSignupChange}
                  placeholder="10-digit phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleSignupChange}
                  placeholder="At least 6 characters"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleSignupChange}
                  placeholder="Re-enter password"
                  required
                />
              </div>

              {error && <div className="error-message">{error}</div>}

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Creating Account..." : "Create Account"}
              </button>

              <div className="toggle-form">
                <p>
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="toggle-btn"
                    onClick={() => {
                      setIsLogin(true);
                      setError("");
                      setFormData({ name: "", email: "", phone: "", password: "", confirmPassword: "" });
                    }}
                  >
                    Sign In
                  </button>
                </p>
              </div>
            </form>
          </>
        ) : (
          <>
            <div className="signup-header">
              <h1>Sign In</h1>
              <p>Welcome back to Zerodha</p>
            </div>

            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="login-email">Email Address</label>
                <input
                  type="email"
                  id="login-email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="login-password">Password</label>
                <input
                  type="password"
                  id="login-password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  placeholder="Enter your password"
                  required
                />
              </div>

              {error && <div className="error-message">{error}</div>}

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Signing In..." : "Sign In"}
              </button>

              <div className="toggle-form">
                <p>
                  Don't have an account?{" "}
                  <button
                    type="button"
                    className="toggle-btn"
                    onClick={() => {
                      setIsLogin(false);
                      setError("");
                      setLoginData({ email: "", password: "" });
                    }}
                  >
                    Create Account
                  </button>
                </p>
              </div>
            </form>
          </>
        )}

        <div className="signup-footer">
          <Link to="/">← Back to Home</Link>
        </div>
      </div>

      <div className="signup-benefits">
        <div className="benefit-item">
          <h3>🔒 Secure</h3>
          <p>Your data is safe with us. Bank-level security and encryption.</p>
        </div>
        <div className="benefit-item">
          <h3>📱 Easy to Use</h3>
          <p>Simple and intuitive interface. Start trading in minutes.</p>
        </div>
        <div className="benefit-item">
          <h3>💰 Low Fees</h3>
          <p>Flat ₹20 for all trades. No hidden charges.</p>
        </div>
        <div className="benefit-item">
          <h3>📈 24/7 Support</h3>
          <p>Get help whenever you need it. Our team is always ready.</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
