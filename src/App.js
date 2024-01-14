//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import {HashRouter, Route,Routes} from 'react-router-dom';
import About from "./routes/About";
import Home from "./routes/Home";

function App(){
  return(
  <HashRouter>
  <Routes>
    <Route path="/" exact={true} element={<Home/>}/>
    <Route path="/about/*" element={<About/>}/>
  </Routes>
  </HashRouter>
  );
}

export default App;


/*
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './components/movie';
import "./routes/App.css";

class App extends React.Component{

  state = {
    isLoading: true,
    movies:[]
  };

  getMovies = async ()=>{
    const {
      data:{
        data:{movies},
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');

    this.setState({movies, isLoading: false}) //movies: movies
  }

  componentDidMount(){
      //setTimeout(()=>{this.setState({isLoading:false})},6000)
    this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state;
    return( 
    <section className="container">
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
                  />

        ))}
      </div>
      )
      }
      </div>
     </section>
  );
  }
}

export default App;
*/
/* component functions
class App extends React.Component{
  
  constructor(props){
    super(props);
    console.log('Конструктор');
  }

  state = {
    count: 0
  };

  add= ()=>{
    this.setState(current=>({count: current.count+1}));
  }

  minus= ()=>{
    this.setState(current=>({count: current.count-1}));
  }

  componentDidMount(){
    console.log('Component Finished rendering');
  }

  componentDidUpdate(){
    console.log("Component did update");
  }

  componentWillUnmount(){
    console.log("Component's fuckind dead :(");
  }

  render(){
    console.log("Rendering");
    return <div>
     <h1>Текущее число: {this.state.count}</h1>  
     <button onClick={this.add}>Плюс</button>
     <button onClick={this.minus}>Минус</button>
    </div>

  }
}
*/
/* food
const foodILike = [
  {
    'id': 1,
    'name':'БОРЩ',
    'image':'https://menunedeli.ru/wp-content/uploads/2022/07/Borshh-iz-govjadiny-500%D1%85350.jpg-1200x800.jpg',
    'rating': 7.8
  },

{
  'id': 2,
  'name':'БУТЕРБРОДЫ',
  'image':'https://cs10.pikabu.ru/post_img/big/2019/01/24/10/1548347968145526527.jpg',
  'rating': 6.9
},

{
  'id': 3,
  'name':'ТВОЮ МАМКУ',
  'image':'https://www.parents.com/thmb/GExGCp2zHxDIKxnCtx4QykPFqAs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1407570793-5f7481ec66794bdb8f67f27f1a9cf6d2.jpg',
  'rating': 1000.0
},

]


function renderFood(dish){
return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
}

function Food({name, picture,rating}){//props
  //console.log(props);
  return(
  <div>
    <h3>Я люблю жрать {name}.</h3>
    <h4>{rating}/10</h4>
    <img src={picture} alt=""/>
  </div> 
  );//{props.name}
}

Food.propTypes={
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number//.isRequired
}

function App() {
  return (
    <div>
      <h1><b><i>Привет, гандоны!!!</i></b></h1>
      {foodILike.map(renderFood)}

    </div>
  );
}
/*


/*
//foodILike.map(current=>{console.log(current); return 0;})
//foodILike.map(function(current){console.log(current); return 0;})
//foodILike.map(function(familyMember){return familyMember + '♡';})

      <Food name='БОРЩ'/>
      <Food name='БУТЕРБРОДЫ'/>
      <Food name='ТВОЮ МАМКУ'/>

//<Food name='БОРЩ' something = {true} lalalalala = {['123',123,1234]}/>
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image}/>)}
*/