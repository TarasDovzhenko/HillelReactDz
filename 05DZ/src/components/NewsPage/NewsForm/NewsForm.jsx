import React from "react";
import faker from "faker";
import { getBase64 } from ".././utils";

export class NewsForm extends React.Component {
  state = {
    title: "",
    content: "",
    description: "",
    photo: "",
    hashtag: "",
    author: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = faker.datatype.uuid();
    const newsDate = this.state;
    const news = {
      id,
      ...newsDate,
    };

    console.log(news);
  };

  handleChangeText = (e) => {
    const input = e.currentTarget;
    const { value, name } = input;
    this.setState({
      [name]: value,
    });
    console.log(value, name);
  };

  handleChangePhoto = (e) => {
    const file = e.currentTarget.files[0];
    getBase64(file, (base64) => {
      this.setState({
        photo: base64,
      });
    });
  };

  render() {
    const { title, content, description, photo, hashtag, author } = this.props;
    return (
      <div className="news-form">
        <form onSubmit={this.handleSubmit} className="news-form__cont">
          <div className="news-form__row">
            <label htmlFor="news-form-title">Title:</label>
            <input
              value={title}
              onChange={this.handleChangeText}
              type="text"
              name="title"
              id="news-form-title"
            />
          </div>
          <div className="news-form__row">
            <label htmlFor="news-form-content">Description:</label>
            <textarea
              value={content}
              onChange={this.handleChangeText}
              name="content"
              id="news-form-content"
            />
          </div>
          <div className="news-form__row">
            <label htmlFor="news-form-description">Description:</label>
            <textarea
              value={description}
              onChange={this.handleChangeText}
              name="description"
              id="news-form-description"
            />
          </div>

          <div className="news-form__row">
            <label htmlFor="news-form-description">Photo:</label>
            {photo.length > 0 && (
              <img
                style={{
                  width: "300px",
                  height: "200px",
                  objectFit: "contain",
                }}
                src={photo}
                alt=""
              />
            )}
            <input
              type="file"
              accept=".jpeg,.png"
              onChange={this.handleChangePhoto}
            />
          </div>

          <button type="submit">Create movie</button>
        </form>
      </div>
    );
  }
}

export default NewsForm;
