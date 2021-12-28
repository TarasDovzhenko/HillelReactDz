import React from "react";
import NewsItem from "./NewsItems/NewsItem";

import PropTypes from "prop-types";

function NewsList(props) {
  const { newsList, onRemoveNews } = props;

  return (
    <ul className="news-one">
      {newsList.map((el) => {
        return (
          <li key={el.id} className="list-items">
            <NewsItem el={el} onRemoveNews={onRemoveNews} />
          </li>
        );
      })}
    </ul>
  );
}

// class NewsList extends React.Component {
//   render() {
//     const { newsList, onRemoveNews } = this.props;
//     return (
//       <ul className="news-one">
//         {newsList.map((el) => {
//           return (
//             <li key={el.id} className="list-items">
//               <NewsItem el={el} onRemoveNews={onRemoveNews} />
//             </li>
//           );
//         })}
//       </ul>
//     );
//   }
// }

export default NewsList;

NewsList.propTypes = {
  items: PropTypes.array,
  onRemoveNews: PropTypes.func.isRequired,
};

NewsList.defaultProps = {
  items: [],
};
