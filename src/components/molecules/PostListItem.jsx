import React from "react";
import { getFriendlyDate } from "../../helpers/Date";

export default function PostListItem(props) {
  const [showContent, setShowContent] = React.useState(false);
  return (
    <div
      onClick={() => setShowContent(!showContent)}
      className="user-blog__posts-item"
    >
      <div className="user-blog__posts-item-photo">
        <img src={props.userPost.image} className="responsive" alt="" />
      </div>
      <h2 className="user-blog__posts-item-title">{props.userPost.title}</h2>
      <div className="user-blog__posts-date">
        Publicado em {getFriendlyDate(props.userPost.createdAt)}
      </div>
      {showContent && (
        <div className="user-blog__post-content">{props.userPost.content}</div>
      )}
    </div>
  );
}
