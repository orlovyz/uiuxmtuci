import React from "react";
import propTypes from 'prop-types';
import "./Movie.css";
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';


function Movie({id,year,title,summary,poster,genres,rating,language,currentPage}){
    return( <div>
            <div className="movie">
            <Link to={{
            pathname:`/about/${currentPage}/${id}`,
            state:{
                year,
                title,
                summary,
                poster,
                genres,
                rating,
                language,
                currentPage
            }
            }}>
            <img src={poster} alt ={title} title={title}/>
            </Link>
                <div className="movie_columm">
                <h3 className="movie_title">{title} [{language}]</h3>
                <h4 className="movie_year">{year}</h4>
                <h3 className="movie_rating">{rating}/10</h3>
                <ul className="movie_genres">
                    {genres.map((genre,index)=>{
                            return <li key={index} className="genres_genre">{genre}</li>
                        })}
                </ul>
                <p className="movie_summary">{summary.slice(0,140)}...</p>
                </div>
            </div>
    </div>
    );
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    rating: propTypes.number.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    year: propTypes.number.isRequired,
    language: propTypes.string.isRequired,
    currentPage: propTypes.number.isRequired
};

export default Movie;