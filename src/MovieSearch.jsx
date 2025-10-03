import React from 'react'
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
import { useState } from 'react'

function MovieSearch() {
    const[searchValue, setSearchValue]=useState();
  const[movielist, setMovieList]=useState([]);
  const[loader, setLoader]=useState(false)
  
 const movies=async ()=>{
    try{
        setLoader(true)
    const data=await axios.get(`${BASE_URL}/?apikey=${API_KEY}&s=${searchValue}`)
    setMovieList(data.data.Search)
    setLoader(false)
    console.log("data",data.data.Search)
    }
    catch(e){
        setLoader(false)
        console.log("error :",e)
    }
    
  }
  return (
    <div className='movieSearch'>
  
      <div className='row  rounded mt-1 w-100 gap-2 p-5' style={{backgroundColor:'rgba(207, 249, 203, 0)',color:'rgba(23, 255, 35, 1)',backdropFilter:'blur(3px)',border:'1px solid green'}}>
        search movie 
      <input type='search' placeholder='enter movie name' onChange={e=>setSearchValue(e.target.value)} style={{height:'50px',width:'100%'}}></input>
      <button style={{height:'45px'}} className='btn btn-primary btn-sm w-25 ' onClick={()=>movies()}>Search <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></button>
    </div>
    <div className='row mt-5 gap-5 movies'>
        {
            loader && ( 
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-warning" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
            )
        }       
                
  

    {
      movielist.map((i,index)=>(
        <div className='d-flex shadow  col-12 gap-5 align-items-center' key={index} style={{backdropFilter:'blur(3px)'}}>
          <div className=' md col-2 w-fluid' ><img src={i.Poster} alt={i.name} width={'120'} ></img></div>
          <div className='md col-10 text-start'>
            <a href={`/view/${i.imdbID}`}><h1>{i.Title}</h1></a>
            <p><strong>Genres </strong>{i.Type}</p>
            <p><strong>Year </strong>{i.Year}</p>
          </div>
        </div>
      ))
    }
    </div>
    </div>
  )
}

export default MovieSearch
