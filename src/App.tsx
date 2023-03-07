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

function App() {

  const [posts, setPosts] = React.useState<SubmitButtonProps[]>([]);

  const handleSetPosts = (value: SubmitButtonProps) => {
    setPosts([...posts, value]);
  }

  return (
    <div className="App">
      <PostContext.Provider value={{ posts, handleSetPosts }}>
        <Router basename="/Homework-03-Create-Post">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-post" element={<NewPost />} />
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </Router>
      </PostContext.Provider>
    </div>
  );
}

export default App;
