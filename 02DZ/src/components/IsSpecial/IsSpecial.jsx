import React from 'react';

class IsSpecial extends React.Component {
  render() {
    const { special } = this.props;
    return <>{special && <div className="is-pecial">Special!!! </div>};</>;
  }
}

export default IsSpecial;
