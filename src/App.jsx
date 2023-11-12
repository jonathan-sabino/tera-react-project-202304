import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Users from "./components/pages/Users";
import UserBlog from "./components/pages/UserBlog";
import PostForm from "./components/pages/PostForm";
import NotFound from "./components/pages/NotFound";

import { CurrentUserContext } from "./contexts/CurrentUserContent";

import "./styles/normalize.css";
import "./styles/font-awesome.min.css";
import "./styles/main.css";

function App() {
  const [currentUser, setCurrentUser] = React.useState("");

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<UserBlog />} />
          <Route path="/users/:userId/post" element={<PostForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CurrentUserContext.Provider>
  );
}

export default App;
