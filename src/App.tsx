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

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-post" element={<NewPost />} />
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
