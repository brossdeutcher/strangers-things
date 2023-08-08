import { useState } from "react";

const PostForm = ({ API_URL, token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0.0);
  const [willDeliver, setWillDeliver] = useState(false);

  const makePost = async () => {
    try {
      const response = await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          post: {
            title,
            description,
            price,
            willDeliver,
          },
        }),
      });
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title, description, price, willDeliver);
    makePost();
  };

  return (
    <>
      {token && <form onSubmit={submitHandler}>
        <label>
          Title
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Description
          <input type="text" onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Price
          <input
            type="number"
            step={0.01}
            onChange={(e) => setPrice("$" + e.target.value)}
          />
        </label>
        <label>
          Will Deliver?
          <input
            type="checkbox"
            onChange={(e) => setWillDeliver(e.target.checked)}
          />
        </label>
        <button>+</button>
      </form>}
    </>
  );
};

export default PostForm;
