var app = function(){

  const url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=afd0f79d78284450b15a185df3c14f55'
  makeRequest(url, requestComplete)
}

const requestComplete = function() {
  if(this.status !== 200) {
    return;
  }

  const jsonString = this.responseText;
  const newsListConvertedFromJson = JSON.parse(jsonString);

console.log(newsListConvertedFromJson);
}

const makeRequest = function(url, callback) {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
}


document.addEventListener('DOMContentLoaded', app);
