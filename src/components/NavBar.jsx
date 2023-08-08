import { Link } from "react-router-dom";

const NavBar = ({token, setToken}) => {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Posts</Link>
        <Link to='/profile'>Profile</Link>
        {token ? <Link to='/' onClick={() => setToken(null)}>Logout</Link> : <Link to='/login'>Login</Link>}
      </nav>
    </>
  )
}

export default NavBar;