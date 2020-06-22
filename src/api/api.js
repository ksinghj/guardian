const KEY = "47a315ab-7e8e-43bc-b3dd-7a5519eca657";

const getArticles = async searchterm => {
  let articles;
  // get data
  let response = await fetch(
    `https://content.guardianapis.com/search?q=${searchterm}&api-key=${KEY}`
  );
  let data = await response.json();
  // populate articles
  articles = data.response.results;
  return articles;
};

export default getArticles;
