import logo from './logo.svg';
import './App.css';

import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/post' element={<PostPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
