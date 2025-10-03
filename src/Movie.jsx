import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Movie() {
    const {imdb}=useParams();
    const [movie, setMovie]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        const movieData= async ()=>{
            const receviedData=await axios.get(`${BASE_URL}/?apikey=${API_KEY}&imdb`)

            console.log('movie data: ',receviedData.data)
            setMovie(receviedData.data)
        }
        movieData();
    },[imdb])
  return (
    <div className="flex justify-center p-6" style={{margin:'0', backgroundColor:'rgba(205, 21, 21, 0)',backdropFilter:'blur(20px)',color:'rgba(36, 255, 36, 1)'}}>
        
  {
    !movie ? (
        <div  style={{ backgroundColor:'rgba(205, 21, 21, 1)',backdropFilter:'blur(2px)'}}>
        <div className='text-start'><button className='btn btn-' onClick={()=>{navigate(-1)}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg></button></div>
      <p className="text-gray-500 text-lg">No info available</p>
      </div>
    ) : (
      <div className="w-100 rounded-2 shadow-lg overflow-hidden p-3">
        <div className='text-start '><button className='btn btn-danger' onClick={()=>{navigate(-1)}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg></button></div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 flex justify-center items-center p-4">
            <img 
              src={movie.Poster} 
              alt={movie.Title} 
              className="rounded shadow-md w-full md:w-auto max-h-[400px] object-cover" 
            />
          </div>
          <div className="md:w-2/3 p-6">
            <h2 className="text-2xl font-bold mb-2">{movie.Title} ({movie.Year})</h2>
            <p className="text-sm text-gray-500 italic">{movie.Genre} | {movie.Runtime} | Rated {movie.Rated}</p>
            <p className="mt-4 text-gray-700">{movie.Plot}</p>
          </div>
        </div>

        <div className="p-6 grid md:grid-cols-2 gap-4 text-sm">
          <p><strong>🎬 Director:</strong> {movie.Director}</p>
          <p><strong>⭐ Actors:</strong> {movie.Actors}</p>
          <p><strong>🏆 Awards:</strong> {movie.Awards}</p>
          <p><strong>💰 Box Office:</strong> {movie.BoxOffice}</p>
          <p><strong>🌍 Country:</strong> {movie.Country}</p>
          <p><strong>🗣️ Languages:</strong> {movie.Language}</p>
          <p><strong>🖊️ Writer:</strong> {movie.Writer}</p>
          <p><strong>📀 DVD:</strong> {movie.DVD}</p>
          <p><strong>🏢 Production:</strong> {movie.Production}</p>
          <p><strong>📅 Released:</strong> {movie.Released}</p>
        </div>

        <div className="p-6 border-t">
          <h3 className="font-semibold mb-2">Ratings</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {movie.Ratings && movie.Ratings.map((rating, index) => (
              <div key={index} className="bg-gray-100 p-3 rounded-lg shadow-sm text-center">
                <p className="font-bold">{rating.Source}</p>
                <p className="text-blue-600">{rating.Value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 border-t flex flex-col md:flex-row justify-between items-center">
          <p><strong>IMDb Rating:</strong> ⭐ {movie.imdbRating} ({movie.imdbVotes} votes)</p>
          <p><strong>Metascore:</strong> {movie.Metascore}/100</p>
        </div>
      </div>
    )
  }
</div>
  )
}

export default Movie
