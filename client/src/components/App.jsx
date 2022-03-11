import React from 'react';
import MovieData from '../data/MovieData.jsx';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddTitle from './AddTitle.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allMovies: []
    }
    this.filterMovies = this.filterMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.onlyWatched = this.onlyWatched.bind(this);
    this.notWatched = this.notWatched.bind(this);
  };

  filterMovies(value) {
    var filteredMovies = this.state.allMovies.filter((movie) => (
      movie.title.toLowerCase().includes(value.toLowerCase())
    ));
    if (filteredMovies.length === 0) {
      filteredMovies = [{title: 'No Movie Found!'}];
    }
    this.setState({allMovies: filteredMovies})
  }

  addMovie(value) {
    var addedMovie = {title: value, isWatched: false};
    // var newMovies = this.state.allMovies;
    // newMovies.push(addedMovie);

    // console.log(newMovies);
    this.setState({allMovies: [...this.state.allMovies, addedMovie]})

    //this.setState({allMovies: allMovies});
  }

  onlyWatched() {
    var watchedMovies = this.state.allMovies.filter((movie) => (
      movie.isWatched === true
    ));
    this.setState({allMovies: watchedMovies})
  }

  notWatched(){
    var watchedMovies = this.state.allMovies.filter((movie) => (
      movie.isWatched === false
    ));
    this.setState({allMovies: watchedMovies})
  }

  render() {
    return (
      <div>
        <h1>MOVIE LIST</h1>
        <div className='add-movie'>
          <AddTitle
            newTitle={this.addMovie}
          />
        </div>
        <div>
          <Search
            searchMovies={this.filterMovies}
          />
          <button onClick={this.onlyWatched}>
            Watched
          </button>
          <button onClick={this.notWatched}>
            To Watch
          </button>
        </div>
        <div>
          <h3>Movies</h3>
          <MovieList movies={this.state.allMovies} />
        </div>
      </div>
    );
  }

};

export default App;