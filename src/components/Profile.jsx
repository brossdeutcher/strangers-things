const Profile = ({ API_URL, token, username }) => {
  
  const getProfile = async () => {
    try {
      const response = await fetch(`${API_URL}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1>
        <em>{username}</em>&apos;s Profile
      </h1>
      <button onClick={getProfile}>profile</button>
    </>
  );
};

export default Profile;
