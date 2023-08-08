import { useEffect, useState } from "react";

const Posts = () => {
  
  const API_URL = 'https://strangers-things.herokuapp.com/api/2306-fsa-et-web-ft-sf'
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(API_URL + '/posts');
      const result = await response.json();
      const postData = result.data.posts;
      setPosts(postData);
      console.log(posts);
    }
    getPosts();
  }, [])
  
  return (
    <>
      <h1>Posts</h1>
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