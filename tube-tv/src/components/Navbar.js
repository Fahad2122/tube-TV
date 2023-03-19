import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  let value = false;
  const clickHandler = ()=> {
    if(value===true){
      value = false;
    }
    else{
      value = true;
    }
    props.clickFunction(value);
  }
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">MiBox</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
            </ul>
            
            <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                TV Shows
                </Link>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><Link className="dropdown-item" to="/tv/action">Action</Link></li>
                  <li><Link className="dropdown-item" to="/tv/sciencefiction">Science Fiction</Link></li>
                  <li><Link className="dropdown-item" to="/tv/mystery">Mystery</Link></li>
                  <li><Link className="dropdown-item" to="/tv/animation">Animation</Link></li>
                  <li><Link className="dropdown-item" to="/tv/comedy">Comedy</Link></li>
                  <li><Link className="dropdown-item" to="/tv/drama">Drama</Link></li>
                  <li><Link className="dropdown-item" to="/tv/family">Family</Link></li>
                  <li><Link className="dropdown-item" to="/tv/war-politics">War and Politics</Link></li>
                  <li><Link className="dropdown-item" to="/tv/reality">Reality</Link></li>
                  <li><Link className="dropdown-item" to="/tv">All</Link></li>
              </ul>
              </li>
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Movies
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li><Link className="dropdown-item" to="/movie/action">Action</Link></li>
                    <li><Link className="dropdown-item" to="/movie/sciencefiction">Science Fiction</Link></li>
                    <li><Link className="dropdown-item" to="/movie/adventure">Adventure</Link></li>
                    <li><Link className="dropdown-item" to="/movie/animation">Animation</Link></li>
                    <li><Link className="dropdown-item" to="/movie/comedy">Comedy</Link></li>
                    <li><Link className="dropdown-item" to="/movie/drama">Drama</Link></li>
                    <li><Link className="dropdown-item" to="/movie/family">Family</Link></li>
                    <li><Link className="dropdown-item" to="/movie/history">History</Link></li>
                    <li><Link className="dropdown-item" to="/movie/horror">Horror</Link></li>
                    <li><Link className="dropdown-item" to="/movie">All</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(event)=>{props.searchFunction(event.target.value)}}/>
                <Link to='/search'><button className="btn btn-danger" type="submit" onClick={clickHandler}>Search</button></Link>
            </form>
            </div>
        </div>
    </nav>
  )
}
