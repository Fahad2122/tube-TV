import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieItem(props) {
  const clickHandler = ()=>{
    let id = document.getElementById(props.title).innerHTML;
    props.watchFunction(id);
    id = document.getElementById(props.desc).innerHTML;
    props.descFunction(id);
  }
  return (
    <div>
      <Link to="/watch" onClick={clickHandler} style={{textDecoration: 'none'}}><div className="card" style={{backgroundColor: 'black', color: 'white'}}>
        <img src={`https://image.tmdb.org/t/p/w500/${props.image}`} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title" style={{color: 'red'}} id={props.title} value={props.title}>{props.title}</h5>
            <span className="badge text-bg-success">imdb: {props.vote}</span>
            <p id={props.desc} style={{display: 'none'}}>{props.desc}</p>
            {/* <p className="card-text">{props.overview}</p> */}
            {/* <a href={`https://image.tmdb.org/t/p/w500/${props.path}`} className="btn btn-danger" target='_blank' rel="noreferrer">Watch Online</a> */}
        </div>
    </div></Link>
    </div>
  )
}