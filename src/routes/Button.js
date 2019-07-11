import React from 'react';

class Button extends React.Component {
  render() {
    return(
      <div>
        <button className="btn btn-success">{this.props.name}</button>
      </div>
    );
  }
}

export default Button;
