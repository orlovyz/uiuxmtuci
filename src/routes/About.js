import React from 'react';
import axios from 'axios';
import Movie from '../components/movie';
import Movie_about from '../components/movie_about';
import {Link} from 'react-router-dom';

import Comments from '../components/Comments';
import "../components/About.css";


  class About extends React.Component{
      state = {
          isLoading: true,
          movies:[],
          showMore: false
        };

      handleShowMore = () => {
        this.setState((prevState) => ({ showMore: !prevState.showMore }));
      };  
        
      getMovies = async ()=>{
          const url = window.location.href; 
          const parts = url.split('/'); 
          const idBeforeLastIndex = parts[parts.length - 2]; 
          const {
            data:{
              data:{movies},
            },
          } = await axios.get(`https://yts.mx/api/v2/list_movies.json?sort_by=rating&page=${idBeforeLastIndex}`);
          this.setState({movies, isLoading: false}) 
        }
      
        componentDidMount(){
          this.getMovies();
        }

      render(){
          const {isLoading, movies} = this.state;
          const url = window.location.href; 

          const lastIndexOfNumber = parseInt(url.match(/\d+$/)[0]); 
          return(  
          <section className="container">
          <div>
          <div className="Home">

          <div className='HomeButton'>
          <Link to="/">
          <img style={{ width: 50, height: 50 }} src="https://free-icon-rainbow.com/i/icon_00569/icon_005690_256.png" alt="Main Page" />
            </Link>
          </div>
          </div>
            {isLoading ? <div className="loader">
              <span className="loader_text">
                Loading...
              </span>
            </div>:(
            //<div>
            <div className="movie-container">
            { 
              
              getMovieById(movies,lastIndexOfNumber, this.state.showMore)//15553 57829
              
          }
            {movies.find((movie) => movie.id === lastIndexOfNumber).summary.length <= 550 ? null : (
                  <button onClick={this.handleShowMore} className="showmore">Show {this.state.showMore ? "less" : "more"}</button>
                )}
            
          <Comments/>
            </div>
            )
            }
            </div>
          </section>
        );
      }
  }

  export default About;



  function getMovieById(movies,id, showMore) {
      const movie = movies.find((movie) => movie.id === id);
      return (
        <Movie_about 
          key={movie.id}
          id={movie.id}   
          year={movie.year} 
          title={movie.title} 
          summary={movie.summary === ''? "No description" : (showMore ? movie.summary : (movie.summary.length > 550 ? `${movie.summary.substring(0, 550)}...` : movie.summary))}
          poster={movie.medium_cover_image}
          genres={movie.genres}
          rating={movie.rating}
          language={movie.language}
        />
      )
  }
