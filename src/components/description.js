import React, { useState } from 'react';
import Movie_about from './movie_about';

function Description(movies){
    
    
    const url = window.location.href; // Получение текущей ссылки страницы
    const lastIndexOfNumber = parseInt(url.match(/\d+$/)[0]); // Получение последнего индекса в виде числа
    const [showMore, setShowMore] = useState(false);
    const {text} = getDescById(movies,lastIndexOfNumber)
    return(
    <h6>
      {showMore ? text : `${text.substring(0, 250)}`}
      <button className="btn" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
    </h6>
    )
}


function getDescById(movies,id) {
    const movie = movies.find((movie) => movie.id === id);
    return (
      <Movie_about   
        summary={movie.summary} 
      />
  
    )
  }


  export default Description;