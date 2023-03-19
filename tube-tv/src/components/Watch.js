import React, { useEffect, useState } from 'react'

export default function Watch(props) {
  const[items, setItems] = useState([]);
  const getTrailer = async ()=>{
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${props.query}&key=AIzaSyDLzGlcLzeuW7cI2eWa2a91Y1413kXW7hY`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setItems(parsedData.items)
  }
  useEffect(()=>{
    getTrailer();
    // eslint-disable-next-line
  }, []);
  let videoID = items.map((e)=>{
    let array = e.snippet.title;
    if(array.toLowerCase().includes('trailer')){
      return e.id.videoId;
    }
    return 0;
  });
  // eslint-disable-next-line
  videoID.map((e)=>{
    if(e!==0){
      videoID[0] = e;
    }
  });
  return (
    <div className='container'>
    <br/><br/><br/>
    <div className="container text-center" style={{backgroundColor: 'black', color: 'white', display: 'flex'}}>
      <div className="row">
        <div className="col-3">
          <h4>video Title</h4>
          <hr />
          <div><h2>{props.query}</h2></div>
        </div>
        <div className="col-9"><div>
      <div className="container" >
        <h2>Trailer</h2>
        <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${videoID[0]}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        />
      </div>
      </div>
      </div>
      </div>
    </div>
    <br/>
    <h3>Description:</h3>
    <p>{props.desc}</p>
    </div>
  )
}

Watch.defaultProps = {
  query: '',
  desc: ''
}