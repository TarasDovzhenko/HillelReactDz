import React, { createRef } from "react";
import PropTypes from "prop-types";
import { AUTHOR, HASHTAGS } from "../../../../data/data";
import gsap from "gsap";

class NewsItem extends React.Component {
  titleEl = createRef();
  photoEl = createRef();
  descriptionEl = createRef();
  contentEl = createRef();
  authorEl = createRef();
  hashtagEl = createRef();
  btnEl = createRef();

  componentDidMount() {
    let title = this.titleEl.current;
    let photo = this.photoEl.current;
    let description = this.descriptionEl.current;
    let content = this.contentEl.current;
    let author = this.authorEl.current;
    let hashtag = this.hashtagEl.current;
    let btn = this.btnEl.current;

    let timeLine = gsap.timeline();

    let titleTransition = gsap.fromTo(
      title,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        ease: "easeInOut",
        duration: 0.7,
      }
    );
    timeLine.add(titleTransition);

    let photoTransition = gsap.fromTo(
      photo,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        ease: "easeInOut",
        duration: 0.7,
      }
    );
    timeLine.add(photoTransition);

    let descTransition = gsap.fromTo(
      description,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        ease: "easeInOut",
        duration: 0.5,
      }
    );
    timeLine.add(descTransition);

    let contentTransition = gsap.fromTo(
      content,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        ease: "easeInOut",
        duration: 0.5,
      }
    );
    timeLine.add(contentTransition);

    let authorTransition = gsap.fromTo(
      author,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        ease: "easeInOut",
        duration: 0.5,
      }
    );
    timeLine.add(authorTransition);

    let hashtagTransition = gsap.fromTo(
      hashtag,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        ease: "easeInOut",
        duration: 0.5,
      }
    );
    timeLine.add(hashtagTransition);

    let btnTransition = gsap.fromTo(
      btn,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        ease: "easeInOut",
        duration: 0.5,
      }
    );
    timeLine.add(btnTransition);
  }

  render() {
    const {
      el: { id, title, description, content, hashtag, photo, author },
      onRemoveNews,
    } = this.props;

    const hashtagData = HASHTAGS.filter((srcHashtag) => {
      return hashtag.indexOf(srcHashtag.value) !== -1;
    });

    return (
      <>
        <h1 ref={this.titleEl}>{title}</h1>

        <div ref={this.photoEl}>
          {photo.length > 0 && (
            <img
              style={{
                width: "300px",
                height: "200px",
                objectFit: "cover",
              }}
              src={photo}
              alt={title}
            />
          )}
        </div>
        {description && (
          <div
            ref={this.descriptionEl}
            className="descrip"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        {content && (
          <p ref={this.contentEl} className="content">
            {content}
          </p>
        )}
        <div ref={this.authorEl}>
          <b>Author: </b>
          {author}
        </div>
        <div ref={this.hashtagEl}>
          <b>Hashtag: </b>
          {hashtagData.map((el) => el.value).join(", ")}
        </div>
        <div ref={this.btnEl}>
          <button onClick={() => onRemoveNews(id)}>Delete News</button>
        </div>
        <hr />
      </>
    );
  }
}

export default NewsItem;

NewsItem.propTypes = {
  el: PropTypes.object,
  onRemoveNews: PropTypes.func.isRequired,
};

NewsItem.defaultProps = {};
