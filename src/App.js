import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import Content from "./components/Content";
import "./styles/styles.css";

const KEY = "47a315ab-7e8e-43bc-b3dd-7a5519eca657";

function App() {
  const [searchterm, setSearchterm] = useState();
  const [articles, setArticles] = useState();

  useEffect(() => {
    // get data
    fetch(
      `https://content.guardianapis.com/search?q=${searchterm}&api-key=${KEY}`
    )
      .then(res => res.json())
      .then(articles => setArticles(articles.response.results));
  }, [searchterm]);

  return (
    <div className="App">
      <Main searchterm={searchterm} setSearchterm={setSearchterm} />

      <Content content={articles} />
    </div>
  );
}

export default App;
