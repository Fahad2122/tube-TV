import React, { useEffect, useState } from 'react'

export default function TopImage(props) {

    const[results, setResults] = useState([]);   
    const getImage = async () => {
        let url = "http://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=76666b486334ac10b7683d37d38bfc65&page=1"
        let data = await fetch(url);
        let parsedData = await data.json();
        setResults(parsedData.results)
    }
    useEffect(() => {
        getImage();
    },[]);
  return (
    <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner">
        {results.map((element)=> {
            return <div className="carousel-item active" key={element.id}>
            <a href='/'><img src={`https://image.tmdb.org/t/p/w500/${element.poster_path}`} className="d-block w-100" alt="high rated movie"  height={300}/>
            <div className="carousel-caption d-none d-md-block">
                {/* <h3>{element.original_title}</h3> */}
            </div></a>
            </div>
        })}
        
        {/* <div className="carousel-item">
        <img src="..." className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
        <img src="..." className="d-block w-100" alt="..."/>
        </div> */}
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}