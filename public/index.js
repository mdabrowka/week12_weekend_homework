// articles = [];
var app = function(){

  // when loading page, get articles
  const url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=afd0f79d78284450b15a185df3c14f55'

  makeRequest(url, requestComplete);

  const loadNews = document.querySelector('#get-news');
  loadNews.addEventListener('click', function () {

    console.log ("Button clicked");

    getNews(articles);

  });

}

const requestComplete = function() {

  // parse json and load into the articles

  if(this.status !== 200) {
    return;
  }
  const jsonString = this.responseText;
  articles = JSON.parse(jsonString);

  console.log("JSON loaded ");
  console.log(articles.articles);
}

const makeRequest = function(url, callback) {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
}

const getNews = function(articles) {
const ul = document.querySelector('#news-content');

console.log("tu" + articles.articles);

articles.articles.forEach(function(article) {



  const liTitle = document.createElement('li');
  liTitle.innerText = article.title;
  ul.appendChild(liTitle);

});
}







document.addEventListener('DOMContentLoaded', app);
