import { useEffect, useState } from "react";
import PostForm from "./PostForm";

const Posts = ({API_URL, token}) => {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(API_URL + '/posts');
      const result = await response.json();
      const postData = result.data.posts;
      setPosts(postData);
    }
    getPosts();
  }, [])
  
  return (
    <>
      <h1>Posts</h1>
      <PostForm token={token} API_URL={API_URL} />
      {posts?.map((post) => (
          <div className="post-card" key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.author.username}</p>
            <p>{post.description}</p>
            <p>{post.price}</p>
            <p>{post.location}</p>
          </div>
      ))}
    </>
  )
}

export default Posts;