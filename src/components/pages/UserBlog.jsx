import React, { useEffect } from "react";
// sempre que quisermos acessar algum valor da rota, usamos o useParams
import { useParams } from "react-router-dom";

import Default from "../templates/Default";
import AppLoading from "../organisms/AppLoading";
import UserBio from "../molecules/UserBio";
import PostListWrapper from "../molecules/PostListWrapper";

export default function UserBlog() {
  // chamando o useParams
  const { userId } = useParams();

  const [user, setUser] = React.useState({});
  const [posts, setPosts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    // crio uma função que recebe todas minhas promises, que no caso serão 2 fetch
    const getApiData = async () => {
      const [userResponse, postsResponse] = await Promise.all([
        fetch(
          `https://63cf09718a780ae6e6710dbe.mockapi.io/users/${userId}`
        ).then((response) => response.json()),
        fetch(
          `https://63cf09718a780ae6e6710dbe.mockapi.io/users/${userId}/posts`
        ).then((response) => response.json()),
      ]);
      // atribuo os novos estados ao user e posts após os dados serem retornados da API
      setUser(userResponse);
      setPosts(postsResponse);
      setIsLoading(false);
    };
    // chamo a função criada anteriormente
    getApiData();
  }, [userId]);

  return isLoading ? (
    <AppLoading />
  ) : (
    <Default>
      <div className="user-blog">
        <UserBio user={user} />
        <PostListWrapper userPosts={posts} />
      </div>
    </Default>
  );
}
