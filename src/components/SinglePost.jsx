import { useLocation, useNavigate } from "react-router-dom";

const SinglePost = ({ selectedPost }) => {
  console.log(selectedPost);

  const deleteHandler = async () => {
    const response = await fetch();
    const result = await response.json();
  }

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
