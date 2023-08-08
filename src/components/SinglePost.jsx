import { useNavigate } from "react-router-dom";

const SinglePost = ({ selectedPost, API_URL, token }) => {
  console.log(selectedPost);

  const navigate = useNavigate();

  const deleteHandler = async () => {
    try {
      console.log("delete handler");
      const response = await fetch(`${API_URL}/posts/${selectedPost._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      console.log(result);
      navigate("/posts");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1>{selectedPost.title}</h1>
      <p>{selectedPost.author.username}</p>
      <p>{selectedPost.description}</p>
      <p>{selectedPost.price}</p>
      <p>{selectedPost.location}</p>
      {selectedPost.isAuthor && <button onClick={deleteHandler}>Delete</button>}
    </>
  );
};

export default SinglePost;
