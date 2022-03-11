import React from 'react';

class AddTitle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.newTitle(this.state.value);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Not Found? Add it!'
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type='submit' value='Add Movie!!' />
      </form>
    );
  }

};

export default AddTitle;