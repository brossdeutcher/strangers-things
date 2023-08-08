import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {

  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);

  const API_URL = 'https://strangers-things.herokuapp.com/api/2306-fsa-et-web-ft-sf';

  return (
    <>
      <NavBar token={token} setToken={setToken} username={username} />
      <Routes>
        <Route path="/" element={<Home username={username} token={token} />} />
        <Route path="/posts" element={<Posts API_URL={API_URL} token={token} />} />
        <Route path="/profile" element={<Profile API_URL={API_URL} token={token} username={username} />} />
        <Route path="/login" element={<Login API_URL={API_URL} isLogin={true} token={token} setToken={setToken} username={username} setUsername={setUsername} />} />
        <Route path="/register" element={<Login API_URL={API_URL} isLogin={false} token={token} setToken={setToken} username={username} setUsername={setUsername} />} />
      </Routes>
    </>
  );
}

export default App;
