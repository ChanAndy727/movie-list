import React from 'react';
import MovieData from '../data/MovieData.jsx';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddTitle from './AddTitle.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

  };

  render() {
    return (
      <div>
        <h1>MOVIE LIST</h1>
        <div className='add-movie'>
          <AddTitle/>
        </div>
        <div className="search-bar">
          <Search
            //handleSearchInputChange={this.}
          />
        </div>
        <div>
          <h3>Movies</h3>
          <MovieList movies={MovieData} />
        </div>
      </div>
    );
  }

};

export default App;