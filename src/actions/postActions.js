import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => async (dispatch) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  dispatch({
    type: FETCH_POSTS,
    payload: data,
  });
};

export const createPost = (postData) => async (dispatch) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  const data = await res.json();
  dispatch({
    type: NEW_POST,
    payload: data,
  });
};
