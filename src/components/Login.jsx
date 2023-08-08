import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = ({ API_URL, isLogin, token, setToken, username, setUsername }) => {

  const currentPath = useLocation().pathname;
  const [password, setPassword] = useState(null);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const getToken = async () => {
    try {
      const response = await fetch(`${API_URL}/users${currentPath}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          },
        }),
      });
      const result = await response.json();
      if (result.success) {
        setToken(result.data.token);
        navigate('/')
      }
      else {
        setMessage(result.error.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    getToken();
  }

  return (
    <>
      <h1>{isLogin ? "Login" : "Register"}</h1>
      {message && <p id="login-error">{message}</p>}
      <form onSubmit={submitHandler}>
        <label>
          username
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          password
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button>{isLogin ? "Login" : "Register"}</button>
      </form>
      {isLogin && <Link to='/register'>Not a member? Click to sign-up!!</Link>}
    </>
  );
};

export default Login;
