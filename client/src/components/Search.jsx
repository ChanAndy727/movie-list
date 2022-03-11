import React from 'react';
class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      value: e.target.value
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.searchMovies(this.state.value);
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Search...'
          value={this.state.value}
          onChange={this.handleInputChange}
        />
        <input type='submit' value='Go!!'></input>
      </form>
    )
  }

}

export default Search;