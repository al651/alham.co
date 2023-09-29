import Navbar from './components/Navbar'
import HomePage from './pages/About'
import BlogPage from './pages/BlogList'
import Post from './pages/Post'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/blog" element={<BlogPage />} />
          <Route exact path="/blog/:id" element={<Post />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
