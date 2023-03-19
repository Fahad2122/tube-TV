import React, { useEffect, useState } from 'react'
import InfiniteScroll from "react-infinite-scroll-component"
import Spinner from './Spinner';
import MovieItem from './MovieItem'

export default function Movies(props) {
    const[results, setResults] = useState([]);
    const[loading, setLoading] = useState(false);
    const[page, setPage] = useState(1);
    // const{totalResults, setTotalResults} = useState(0);
    const getMovie = async () => {
        let url = `https://api.themoviedb.org/3${props.link}api_key=76666b486334ac10b7683d37d38bfc65${props.query}&page=1`;
        props.progressFunction(10);
        let data = await fetch(url);
        props.progressFunction(30);
        let parsedData = await data.json();
        props.progressFunction(70);
        setResults(parsedData.results);
        props.progressFunction(100);
    }
    useEffect(() => {
        getMovie();
        //eslint-disable-next-line
      }, []);
    const fetchMoreData = async () => {
        let url = `https://api.themoviedb.org/3${props.link}api_key=76666b486334ac10b7683d37d38bfc65${props.query}&page=${page + 1}`;
        setPage(page + 1);
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setResults(results.concat(parsedData.results));
        // setTotalResults(parsedData.totalResults);
        setLoading(false)
    }
  return (
    <div>
        <br/>
        <br/>
        <h1 className="text-center my-3">MiBox - {props.name}</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
           dataLength={results.length}
           next={fetchMoreData}
           hasMore={page!==results.total_pages}
        //    hasMore={results.length !== totalResults}
        //    loader={results.length===totalResults?"":<Spinner/>}
            loader={page!==results.total_pages?<Spinner/>:''}
        >
        <div className="container">
        
            <div className="row">
                {results.map((element)=> {
                    return <div className="col-md-3 my-2" key={element.id}>
                        <MovieItem title={element.title?element.title:element.name} desc={element.overview} overview={element.overview} image={element.poster_path} path={element.backdrop_path} vote={element.vote_average} watchFunction={props.watchFunction} descFunction={props.descFunction}/>
                    </div>
                })}
            </div>
        </div>
        </InfiniteScroll>
    </div>
  )
}

Movies.defaultProps = {
    query: ''
}