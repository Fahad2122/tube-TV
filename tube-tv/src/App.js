import React, { useState } from 'react'
import Movies from './components/Movies'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Watch from './components/Watch'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
export default function App() {
  const[progress, setProgress] = useState(0);
  const[searchBar, setSearchBar] = useState('');
  const[watch, setwatch] = useState('');
  const[click, setClick] = useState(false);
  const[desc, setDesc] = useState('');
  const searchFunction = (query) => {
    setSearchBar(query);
  }
  const progressFunction = (value) => {
    setProgress(value);
  }
  const clickFunction = (value) => {
    setClick(value);
  }
  const watchFunction = (id) => {
    setwatch(id);
  }
  const descFunction = (value) => {
    setDesc(value);
  }
  return (
    <div style={{padding: '50'}}>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <BrowserRouter>
      <Navbar searchFunction={searchFunction} clickFunction={clickFunction}/>
      <Routes>
        <Route exact path="/" element={<Home  link="/discover/movie?sort_by=popularity.desc&" name="Popular" watchFunction={watchFunction} descFunction={descFunction} progressFunction={progressFunction} />}/>

        <Route exact path="/tv/action" element={<Movies key='tv/action'  link="/discover/tv?with_genres=10759&" name="Action TV-Show" watchFunction={watchFunction} descFunction={descFunction} progressFunction={progressFunction} />}/>
        <Route exact path="/tv/sciencefiction" element={<Movies key="tv/sciencefiction"  link="/discover/tv?with_genres=10756&" name="Sci-fi TV-Show" watchFunction={watchFunction} descFunction={descFunction} progressFunction={progressFunction} />}/>
        <Route exact path="/tv/mystery" element={<Movies key='tv/mystery'  link="/discover/tv?with_genres=9648&" name="Mystery TV-Show" watchFunction={watchFunction} descFunction={descFunction} progressFunction={progressFunction} />}/>
        <Route exact path="/tv/animation" element={<Movies key='tv/animation'  link="/discover/tv?with_genres=16&" name="Animation TV-Show" watchFunction={watchFunction} descFunction={descFunction} progressFunction={progressFunction} />}/>
        <Route exact path="/tv/comedy" element={<Movies key='tv/comedy'  link="/discover/tv?with_genres=35&" name="Comedy TV-Show" watchFunction={watchFunction} descFunction={descFunction} progressFunction={progressFunction} />}/>
        <Route exact path="/tv/drama" element={<Movies key='tv/drama'  link="/discover/tv?with_genres=18&" name="Drama TV-Show" watchFunction={watchFunction} descFunction={descFunction} progressFunction={progressFunction} />}/>
        <Route exact path="/tv/family" element={<Movies key='tv/family'  link="/discover/tv?with_genres=10751&" name="Family TV-Show" />}/>
        <Route exact path="/tv/war-politics" element={<Movies key='tv/war-politics'  link="/discover/tv?with_genres=10768&" name="War and Politics TV-Show" watchFunction={watchFunction} descFunction={descFunction} progressFunction={progressFunction} />}/>
        <Route exact path="/tv/reality" element={<Movies key='tv/reality'  link="/discover/tv?with_genres=10764&" name="Reality TV-Show" watchFunction={watchFunction} descFunction={descFunction} progressFunction={progressFunction} />}/>
        <Route exact path="/tv" element={<Movies key='tvAll'  link="/discover/tv?" name="TV-Shows" watchFunction={watchFunction} descFunction={descFunction} progressFunction={progressFunction} />}/>

        <Route exact path="/movie/action" element={<Movies key='movie/action'  link="/discover/movie?with_genres=28&" name="Action Movie" watchFunction={watchFunction} descFunction={descFunction} progressFunction={progressFunction} />}/>
        <Route exact path="/movie/sciencefiction" element={<Movies key="movie/sciencefiction"  link="/discover/movie?with_genres=878&" name="Sci-fi Movie" watchFunction={watchFunction} descFunction={descFunction} progressFunction={progressFunction} />}/>
        <Route exact path="/movie/adventure" element={<Movies key='movie/adventure'  link="/discover/movie?with_genres=12&" name="Adventure Movie" watchFunction={watchFunction} descFunction={descFunction} progressFunction={progressFunction} />}/>
        <Route exact path="/movie/animation" element={<Movies key='movie/animation'  link="/discover/movie?with_genres=16&" name="Animation Movie" watchFunction={watchFunction} descFunction={descFunction} progressFunction={progressFunction} />}/>
        <Route exact path="/movie/comedy" element={<Movies key='movie/comedy'  link="/discover/movie?with_genres=35&" name="Comedy Movie" watchFunction={watchFunction} descFunction={descFunction} progressFunction={progressFunction} />}/>
        <Route exact path="/movie/drama" element={<Movies key='movie/drama'  link="/discover/movie?with_genres=18&" name="Drama Movie" watchFunction={watchFunction} descFunction={descFunction} progressFunction={progressFunction} />}/>
        <Route exact path="/movie/family" element={<Movies key='movie/family'  link="/discover/movie?with_genres=10751&" name="Family Movie" watchFunction={watchFunction} descFunction={descFunction} progressFunction={progressFunction} />}/>
        <Route exact path="/movie/history" element={<Movies key='movie/history'  link="/discover/movie?with_genres=36&" name="History Movie" watchFunction={watchFunction} descFunction={descFunction} progressFunction={progressFunction} />}/>
        <Route exact path="/movie/horror" element={<Movies key='movie/horror'  link="/discover/movie?with_genres=27&" name="Horror Movie" watchFunction={watchFunction} descFunction={descFunction} progressFunction={progressFunction} />}/>
        <Route exact path="/movie" element={<Movies key='movieAll'  link="/discover/movie?" name="Movies" watchFunction={watchFunction} descFunction={descFunction} progressFunction={progressFunction} />}/>

        <Route exact path='/search' element={<Movies key={click} link='/search/movie?' name='Search Results' query={`&query=${searchBar}`} watchFunction={watchFunction} descFunction={descFunction} progressFunction={progressFunction} />}/>


        <Route exact path='/watch' element={<Watch key={watch} query={watch} desc={desc} />}/>


      </Routes>
    </BrowserRouter>
    </div>
  )
}