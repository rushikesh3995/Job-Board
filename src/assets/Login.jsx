import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {

  const [showPassword, setShowPassword] = useState(false);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email:email,
        password:password
      })
    })

    const data = await res.json()
    alert(data.message)
  }

  return (
    <div className="login-wrapper">

      <div className="login-card">

        <h1>Welcome Back</h1>
        <p className="login-sub">Login to continue your career journey</p>

        <form className="login-form" onSubmit={handleLogin}>

          <div className="login-field">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className="login-field password-field">
            <label>Password</label>

            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />

              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                
              </span>

            </div>
          </div>

          <div className="login-options">

            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#">Forgot Password?</a>

          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <div className="divider">OR</div>

          <button type="button" className="google-btn">
            Continue with Google
          </button>

          <p className="create-account">
            Don't have an account?{" "}
            <Link to="/register">
              <span>Create Profile</span>
            </Link>
          </p>

        </form>

      </div>

    </div>
  );
}

export default Login;