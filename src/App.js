import Navbar from './components/Navbar'
import HomePage from './pages/Home'
import BlogPage from './pages/Blog'
import Posts from './pages/Post'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/lorem" element={<Posts />} />
          <Route path="/blog/2022-09-24-blog-post" element={<Posts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
