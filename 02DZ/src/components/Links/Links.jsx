import React from 'react';

class Links extends React.Component {
  render() {
    const { link } = this.props;
    return (
      <>
        <li className="link">
          <a href={link}>{link}</a>
        </li>
      </>
    );
  }
}

export default Links;
