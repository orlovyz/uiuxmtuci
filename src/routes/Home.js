import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from '../components/movie';
import '../components/Movie.css'

class Home extends React.Component{

  state = {
    isLoading: true,
    movies:[],
    currentPage: 1
  };

  getMovies = async (page)=>{
    const {
      data:{
        data:{movies},
      },
    } = await axios.get(`https://yts.mx/api/v2/list_movies.json?sort_by=rating&page=${page}`);

    this.setState({movies, isLoading: false}) 
  }

  componentDidMount(){
    this.getMovies(this.state.currentPage);
  }

  handlePageChange = (page) => {
    this.setState({currentPage: page, isLoading: true}, () => {
      this.getMovies(page);
    });
  }


  render(){
    const {isLoading, movies, currentPage} = this.state;
    return( 
    <section className="container">
      {!isLoading ?
      <div className="buttonstop">
        <button onClick={() => this.handlePageChange(currentPage - 1)}disabled={currentPage === 1}>Previous</button>
        <button onClick={() => this.handlePageChange(currentPage + 1)}>Next</button>
      </div>:null
      }
    <div>
      {isLoading ? <div className="loader">
        <span className="loader_text">
          Loading...
        </span>
      </div>:(
      //<div>
      <div className="movies">
      { movies.map((movie) => (
                <Movie 
                  key={movie.id}
                  id={movie.id}   
                  year={movie.year} 
                  title={movie.title} 
                  summary={movie.summary} 
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                  rating={movie.rating}
                  language={movie.language}
                  currentPage={currentPage}
                  />

        ))}
      </div>
      )
      }
      </div>

      {!isLoading ?
      <div className="buttons">
        <button onClick={() => this.handlePageChange(currentPage - 1)}disabled={currentPage === 1}>Previous</button>
        <button onClick={() => this.handlePageChange(currentPage + 1)}>Next</button>
      </div>:null
      }

     </section>
  );
  }
}

export default Home;

