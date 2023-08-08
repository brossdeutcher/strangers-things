import { useEffect } from "react";
import PostForm from "./PostForm";
import { Link } from "react-router-dom";

const Posts = ({ API_URL, token, posts, setPosts, setSelectedPost }) => {

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(API_URL + "/posts", {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
      const result = await response.json();
      const postData = result.data.posts;
      setPosts(postData);
      console.log(postData);
    };
    getPosts();
  }, [token]);

  return (
    <>
      <h1>Posts</h1>
      <PostForm token={token} API_URL={API_URL} />
      {posts?.map((post) => (
        <Link to={"/posts/" + post._id}  key={post._id} onClick={() => setSelectedPost(post)}>
            <h2>{post.title}</h2>
            <p>{post.author.username}</p>
            <p>{post.description}</p>
            <p>{post.price}</p>
            <p>{post.location}</p>
        </Link>
      ))}
    </>
  );
};

export default Posts;
