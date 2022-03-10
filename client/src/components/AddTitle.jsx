import React from 'react';

class AddTitle extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='Not Found? Add it!'
        />
        <button>
          Add Movie
        </button>
      </div>

    );
  }

};

export default AddTitle;