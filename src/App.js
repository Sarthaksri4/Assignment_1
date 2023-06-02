import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MovieDetail from './components/MovieDetail/MovieDetail';
import MovieList from './components/MovieList/MovieList';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<MovieList/>} />
        <Route path='/movies/:id' element={<MovieDetail/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
