import { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ API_URL, isLogin }) => {

  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const getTokenSignup = async () => {
    try {
      const response = await fetch(API_URL + "/users/register", {
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
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`username: ${username}\npassword: ${password}`);
  }

  return (
    <>
      <h1>{isLogin ? "Login" : "Signup"}</h1>
      <form onSubmit={submitHandler}>
        <label>
          username
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          password
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button>{isLogin ? "Login" : "Signup"}</button>
      </form>
      {isLogin && <Link to='/signup'>Not a member? Click to sign-up!!</Link>}
    </>
  );
};

export default Login;
