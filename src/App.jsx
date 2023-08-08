import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {

  const API_URL = 'https://strangers-things.herokuapp.com/api/2306-fsa-et-web-ft-sf';

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts API_URL={API_URL} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login API_URL={API_URL} isLogin={true} />} />
        <Route path="/signup" element={<Login API_URL={API_URL} isLogin={false} />} />
      </Routes>
    </>
  );
}

export default App;
