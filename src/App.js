import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/About'
import BlogPage from './pages/BlogList'
import Post from './pages/Post'
import NotFound from './pages/NotFound'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/blog/*" element={<BlogPage />} />
          <Route exact path="/blog/:id" element={<Post />} />
          <Route path="*" element={<NotFound status={404} />}  />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
