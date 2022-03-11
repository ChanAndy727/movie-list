import React from 'react';


class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value:'not watched',
      isWatched: false
    }

    this.handleWatched = this.handleWatched.bind(this);
  }

  handleWatched() {
    if (!this.props.movie.isWatched) {
      this.props.movie.isWatched = true;
      this.setState({value:'Watched'})
    } else {
      this.props.movie.isWatched = false;
      this.setState({value:'not watched'})
    }
  }

  render() {
    return (
      <li>
        {this.props.movie.title}
        <input
          type='button'
          value={this.state.value}
          onClick={this.handleWatched}
        />
      </li >
    )
  }


};

export default Movie;