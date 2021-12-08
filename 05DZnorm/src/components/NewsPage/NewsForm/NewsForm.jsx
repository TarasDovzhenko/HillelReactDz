import React from "react";
import faker from "faker";
import { getBase64 } from "../utils";
import { AUTHOR, HASHTAGS } from "../../../data/data.jsx";
import style from "./NewsForm.module.css";

export class NewsForm extends React.Component {
  state = {
    title: "",
    content: "",
    description: "",
    photo: "",
    hashtag: [],
    author: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = faker.datatype.uuid();
    const newsDate = this.state;
    const news = {
      id,
      ...newsDate,
    };
    this.props.onAddNews(news);
    this.setState({
      title: "",
      content: "",
      description: "",
      photo: "",
      hashtag: "",
      author: "",
    });
  };

  handleChangeText = (e) => {
    const input = e.currentTarget;
    const { value, name } = input;
    this.setState({
      [name]: value,
    });
  };

  handleChangePhoto = (e) => {
    const file = e.currentTarget.files[0];
    getBase64(file, (base64) => {
      this.setState({
        photo: base64,
      });
    });
  };

  handleChangeAuthor = (e) => {
    const { value } = e.currentTarget;
    this.setState({
      author: value,
    });
  };

  handleChangeTag = (e) => {
    const { value } = e.currentTarget;
    let newTeg;

    if (this.state.hashtag.includes(value)) {
      newTeg = this.state.hashtag.filter((el) => el !== value);
    } else {
      newTeg = [...this.state.hashtag, value];
    }

    this.setState({
      hashtag: newTeg,
    });
  };

  render() {
    const { title, content, description, photo, hashtag, author } = this.state;
    return (
      <div className={style.newsForm}>
        <form onSubmit={this.handleSubmit} className={style.newsForm}>
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
            <textarea
              placeholder="Сontent"
              className={style.formTextarea}
              value={content}
              onChange={this.handleChangeText}
              name="content"
              id="news-form-content"
            />
          </div>
          <div className="news-form__row">
            <textarea
              placeholder="Description"
              className={style.formTextarea}
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
                  objectFit: "cover",
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

          <div className="news-form__row">
            <span>Author:</span>
            <div>
              {AUTHOR.map((el) => (
                <label key={el.name}>
                  <input
                    checked={author === el.name}
                    type="radio"
                    value={el.name}
                    onChange={this.handleChangeAuthor}
                  />
                  <span>{el.name}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="movie-form__row">
            <span>Hashtag:</span>
            <div>
              {HASHTAGS.map((el) => (
                <label key={el.value}>
                  <input
                    checked={hashtag.indexOf(el.value) !== -1}
                    type="checkbox"
                    value={el.value}
                    onChange={this.handleChangeTag}
                  />
                  <span>{el.hashtag}</span>
                </label>
              ))}
            </div>
          </div>

          <button type="submit">Create news</button>
        </form>
      </div>
    );
  }
}

export default NewsForm;
