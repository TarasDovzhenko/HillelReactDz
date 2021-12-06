import React from "react";

class Categories extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <>
        {categories && (
          <li className="categories">
            {categories.map((el, i) => {
              return (
                <div key={el.id}>
                  <div>ID: {el.id}</div>
                  <div>NAME: {el.name}</div>
                </div>
              );
            })}
          </li>
        )}
      </>
    );
  }
}

export default Categories;
