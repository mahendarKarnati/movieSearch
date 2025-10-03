import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Movie from './Movie';
import MovieSearch from './MovieSearch';

function App() {
  
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/view/:imdb' element={<Movie></Movie>}></Route>
      <Route path='/' element={<MovieSearch></MovieSearch>}></Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
