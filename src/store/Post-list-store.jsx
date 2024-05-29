import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newCurrPistList = currPostList;
  if (action.type === "DELETE_POST") {
    newCurrPistList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newCurrPistList = [action.payload, ...currPostList];
  }
  return newCurrPistList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now,
        title: postTitle,
        body: postBody,
        reaction: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "Going to Mumbai",
    body: "Hi Friend , I am going to beach for vacation",
    reaction: 2,
    userId: "user-2",
    tags: ["vacation", "Mumbai", "Enjoing"],
  },
  {
    id: 2,
    title: "Going to Graduate",
    body: "4 years need to fcus on enjoy and growth",
    reaction: 14,
    userId: "user-21",
    tags: ["Graduation", "Mumbai", "Degree"],
  },
];

export default PostListProvider;
