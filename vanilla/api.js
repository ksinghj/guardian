let input = document.querySelector("[data-js-input]");
let button = document.querySelector("[data-js-button]");
let content = document.querySelector(".content");

const getArticles = async inputValue => {
  let searchQuery;
  let articles;
  inputValue.preventDefault();
  searchQuery = input.value;
  console.log(searchQuery);
  // get data
  let response = await fetch(
    `https://content.guardianapis.com/search?q=${searchQuery}&api-key=${KEY}`
  );
  let data = await response.json();
  // populate articles
  articles = data.response.results;
  return articles;
};

const displayNews = async e => {
  let data = await getArticles(e);
  content.innerHTML = "";
  return data.map(article => {
    let p = document.createElement("p");
    p.innerHTML = article.webTitle;
    return content.appendChild(p);
  });
};

button.addEventListener("click", displayNews);

const KEY = "47a315ab-7e8e-43bc-b3dd-7a5519eca657";
