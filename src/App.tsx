import React from 'react';
import './css/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from './pages/Home';
import { NotFoundPage } from './pages/Error';
import { NewPost } from './pages/NewPost';

import { PostContext, SubmitButtonProps } from './pages/component/PostContent';
import { ModifyPost } from './pages/ModifyPost';

function App() {

  const [posts, setPosts] = React.useState<SubmitButtonProps[]>([]);

  const handleSetPosts = (value: SubmitButtonProps) => {
    const updatedPosts = [...posts, value];
    setPosts(updatedPosts);
  };

  // 刪掉最後一個 post
  const handleRemoveLastPost = () => {
    if (posts.length > 0) {
      const updatedPosts = posts.slice(0, posts.length - 1);
      setPosts(updatedPosts);
    }
  };

  return (
    <div className="App">
      <PostContext.Provider value={{ posts, handleSetPosts, handleRemoveLastPost }}>
        <Router basename="/Homework-03-Create-Post">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-post" element={<NewPost />} />
            <Route path="/modify-post/:id" element={<ModifyPost />} />
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </Router>
      </PostContext.Provider>
    </div>
  );
}

export default App;
