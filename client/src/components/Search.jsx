import React from 'react';
class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleInputChange(e) {
    this.props.handleSearchInputChange(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <input
        className='form-control'
        type='text'
        placeholder='Search...'
        value={this.state.value}
        onChange={this.handleInputChange.bind(this)}
      />
    )
  }

}

export default Search;