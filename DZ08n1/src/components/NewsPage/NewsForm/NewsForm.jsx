import React, { useState, useReducer } from "react";
import faker from "faker";
import { getBase64 } from "../utils";
import { AUTHOR, HASHTAGS } from "../../../data/data.jsx";
import style from "./NewsForm.module.css";

function NewsForm(props) {
  const { onAddNews } = props;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [hashtag, setHashtag] = useState([]);
  const [author, setAuthor] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = faker.datatype.uuid();

    const news = {
      id,
      title,
      content,
      description,
      photo,
      hashtag,
      author,
    };
    onAddNews(news);
  };

  const handleChangePhoto = (e) => {
    const file = e.currentTarget.files[0];
    getBase64(file, (base64) => {
      setPhoto(base64);
    });
  };

  const handleChangeAuthor = (e) => {
    const { value } = e.currentTarget;
    setAuthor(value);
  };

  const handleChangeTag = (e) => {
    const { value } = e.currentTarget;
    let newTeg;

    if (hashtag.includes(value)) {
      newTeg = hashtag.filter((el) => el !== value);
    } else {
      newTeg = [...hashtag, value];
    }

    setHashtag(newTeg);
  };

  return (
    <div className={style.newsForm}>
      <form onSubmit={handleSubmit} className={style.newsForm}>
        <div>
          <label htmlFor="news-form-title">Title:</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            onChange={(e) => setContent(e.target.value)}
            name="content"
            id="news-form-content"
          />
        </div>
        <div>
          <textarea
            placeholder="Description"
            className={style.formTextarea}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            id="news-form-description"
          />
        </div>

        <div>
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
          <input type="file" accept=".jpeg,.png" onChange={handleChangePhoto} />
        </div>

        <div>
          <span>Author:</span>
          <div>
            {AUTHOR.map((el) => (
              <label key={el.name}>
                <input
                  checked={author === el.name}
                  type="radio"
                  value={el.name}
                  onChange={handleChangeAuthor}
                />
                <span>{el.name}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <span>Hashtag:</span>
          <div>
            {HASHTAGS.map((el) => (
              <label key={el.value}>
                <input
                  checked={hashtag.indexOf(el.value) !== -1}
                  type="checkbox"
                  value={el.value}
                  onChange={handleChangeTag}
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

export default NewsForm;
