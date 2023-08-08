const Home = ({username, token}) => {
  return (
    <>
      <h1>Stranger&apos;s Things</h1>
      {token ? <h2>Welcome, <em>{username}</em>!</h2> : <h2>A Marketplace Forum</h2>}
    </>
  )
}

export default Home;