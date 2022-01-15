import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchField from './components/SearchField';

function App() {
  const api_key = "vR6XY9gWaPKEgSDrp9whu5XAN8SOMbeD";
  const [apiResponse, allResponses] = useState([]);

  //<--------Trending Search------->
  const fetchTrending = async () => {
    await axios
    .get("http://api.giphy.com/v1/gifs/trending?api_key=" + api_key)
    .then(response => {
      allResponses(response.data.data);
    })
  }

  //loads trending gifs on launch
  useEffect(() => {
    fetchTrending();
  }, [])

//<-----Random Search-------->
  const fetchRandom = async () => {
    await axios
    .get("http://api.giphy.com/v1/gifs/random?api_key=" + api_key)
    .then(response => {
      allResponses(new Array(response.data.data));
    })
  }

  return (
    <div className="App">
      <h1 className='text-center'>Search Giphy For A Gif</h1>
      <SearchField onSubmitSearch={allResponses}></SearchField>
      <button className='submit-button' onClick={fetchRandom}>Random</button>
      <div className='container'>
        <div className='row'>
          {
            apiResponse.map(event => {
              return <img key={event.id} className='submit-out' src={event.images.original.url} alt='GIPHY'></img>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
