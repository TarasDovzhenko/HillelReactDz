import React from "react";

class Content extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <li
        className="content"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></li>
    );
  }
}

export default Content;
