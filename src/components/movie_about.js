import React from "react";
import propTypes from 'prop-types';
import "./Movie_about.css";
import {Link} from 'react-router-dom';


function Movie_about({id,year,title,summary,poster,genres,rating,language}){
    return( <div>
            <div className="movie_about">

            <img src={poster} alt ={title} title={title}/>

                <div className="movie_columm">
                <h3 className="movie_title">{title} [{language}]</h3>
                <h3 className="movie_rating">{rating}/10</h3>
                <h4 className="movie_year">{year}</h4>
                <ul className="movie_genres">
                    {genres.map((genre,index)=>{
                            return <li key={index} className="genres_genre">{genre}</li>
                        })}
                </ul>
                </div>

            </div>
            <div className="summary">
                <p className="movie_summary">{summary}</p>
                </div>
    </div>
    );
}

Movie_about.propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    rating: propTypes.number.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    year: propTypes.number.isRequired,
    language: propTypes.string.isRequired
};

export default Movie_about;