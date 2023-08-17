import axios from "../../axios";
import { useContext, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Navbar from "../../Components/navbar/Navbar"
import "./login.css";
import img from "./classic-red-welcome-banner-transparent-png-stickpng-26.png"

const Login = () => {

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const {errorElement , setErrorElement} = useState("")

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });
    
    try {
      const res = await axios.post("/auth/login", credentials ,  {timeout : 5000});
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.userDetails });
      navigate("/")
    } 
    catch (err) {
      switch (err.code) {

        case "ERR_NETWORK":
          setErrorElement('all_error')
          dispatch({ type: "LOGIN_FAILURE", payload: 'Internet is not connected to network !!! ' });
          break;

        case "ECONNABORTED":
          dispatch({ type: "LOGIN_FAILURE", payload: 'request takes more than 5 sec' });
          break;

        case 404://user not found
          setErrorElement('username_error')
          dispatch({ type: "LOGIN_FAILURE", payload: 'request takes more than 5 sec' });
          break;

        case 401://user not found
        setErrorElement('password_error')
          dispatch({ type: "LOGIN_FAILURE", payload: 'request takes more than 5 sec' });
          break;

        default:
          setErrorElement('all_error')
          dispatch({ type: "LOGIN_FAILURE", payload:  err.response.data });
          break;
      }
    }
  };


  return (
    <section className="login_section">

    <Navbar/>

      <div className="bottom">


      <div className="left">

        <form className={`form_group ${errorElement === 'form_error' ? 'form_error' : ""}`}>
          <h2> Login</h2>

          <div className={`input_group ${errorElement === 'username_error' ? 'input_error' : ""}`}>
            <label htmlFor="username">UserName</label>
            <input
              type="text"
              placeholder="enter your username"
              id="username"
              onChange={handleChange}
              required
            />
          </div>

          <div className={`input_group ${errorElement === 'password_error' ? 'input_error' : ""}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="enter your password password"
            id="password"
            onChange={handleChange}
            required
          />
          </div>

          <button disabled={loading} onClick={handleClick} >
            Login
          </button>
          {error && <span className="error_message">{error.message}</span>}

        </form>

    </div>


    <div className="right">

      <img
       src={img}
       alt=""
       />

    </div>

</div>
    
    </section>
  );
};

export default Login;
