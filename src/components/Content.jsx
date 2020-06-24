import React from "react";
import Button from "./Button";

class Content extends React.Component {
  articlesMapped = arr => {
    if (arr) {
      return arr.map(article => {
        return (
          <div className="content">
            <p>{article.webTitle}</p>
            <a href={article.webUrl} target="_blank" rel="noopener noreferrer">
              <Button>Go to article</Button>
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
