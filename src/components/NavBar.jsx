import { Link } from "react-router-dom";

const NavBar = ({token, setToken, username}) => {
  return (
    <>
      <nav>
        {token && <h5>logged in as <em>{username}</em></h5>}
        <section id="nav-links">
        <Link to='/'>Home</Link>
        <Link to='/posts'>Posts</Link>
        <Link to='/profile'>Profile</Link>
        {token ? <Link to='/' onClick={() => setToken(null)}>Logout</Link> : <Link to='/login'>Login</Link>}
        </section>
      </nav>
    </>
  )
}

export default NavBar;