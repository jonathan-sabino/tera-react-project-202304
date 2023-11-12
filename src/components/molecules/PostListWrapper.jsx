import React from "react";
import PostListItem from "./PostListItem";

export default function PostListWrapper(props) {
  return (
    <div className="user-blog__posts">
      {props.userPosts.map((post) => (
        <PostListItem userPost={post} key={post.id} />
      ))}
    </div>
  );
}
