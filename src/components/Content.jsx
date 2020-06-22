import React from "react";

class Content extends React.Component {
  articlesMapped = arr => {
    if (arr) {
      return arr.map(article => {
        return (
          <div className="content">
            <p>{article.webTitle}</p>
            <a href={article.webUrl} target="_blank" rel="noopener noreferrer">
              <button>Go to article</button>
            </a>
          </div>
        );
      });
    }
  };
  // cn be func
  render() {
    return (
      <div className="content__container">
        {this.articlesMapped(this.props.content)}
      </div>
    );
  }
}

export default Content;
