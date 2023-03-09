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

import { PostContext, PostContent } from './pages/component/PostContent';
import { ModifyPost } from './pages/ModifyPost';

function App() {

  const [posts, setPosts] = React.useState<PostContent[]>([]);

  const handleSetPosts = (value: PostContent) => {
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

  const updatePost = (id: string, updatedPost: PostContent) => {
    const index = posts.findIndex(post => post.id === id);
    if (index !== -1) {
      const newPosts = [...posts];
      newPosts[index] = updatedPost;
      setPosts(newPosts);
    }
  }

  return (
    <div className="App">
      <PostContext.Provider value={{ posts, handleSetPosts, handleRemoveLastPost, updatePost }}>
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
