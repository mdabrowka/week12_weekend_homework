var app = function(){

  const loadNews = document.querySelector('#get-news');
  loadNews.addEventListener('click', function () {
    // bbc
    const url = 'https://newsapi.org/v2/top-headlines?' +
            'sources=bbc-news&' +
            'apiKey=afd0f79d78284450b15a185df3c14f55'


    makeRequest(url, requestComplete);
    window.alert("request 1 complete");

  });

    // buzzfeed - should load after clicking on the button
   const loadNextPage = document.querySelector('#next-news');
   loadNextPage.addEventListener('click', function() {

     const url2 = 'https://newsapi.org/v2/top-headlines?' +
               'sources=buzzfeed&' +
               'apiKey=afd0f79d78284450b15a185df3c14f55'
     makeRequest(url2, requestComplete);
     window.alert("request 2 complete");


   });

}

const requestComplete = function() {

  // parse json and load into the articles

  if(this.status !== 200) {
    return;
  }
  const jsonString = this.responseText;

  console.log("Response text" + jsonString);

  articles = JSON.parse(jsonString);
  getNews(articles);

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

  console.log("Articles: " + articles.articles)

  const ul = document.querySelector('#news-content');
  articles.articles.forEach(function(article) {
  const liTitle = document.createElement('li');
  liTitle.innerText = article.title;
  ul.appendChild(liTitle);
  // const liImage = document.createElement('li');
  // liImage.innerHTML = '';
  const image = document.createElement('img');
  image.src = article.urlToImage;
  ul.appendChild(image);
});
}

// const createImage = function(urlToImage) {
//   const image = document.createElement('img');
//   image.src = article.urlToImage;
//   return image;
// }






document.addEventListener('DOMContentLoaded', app);
