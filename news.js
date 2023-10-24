const newsData = document.querySelector('#newsData')

const news = localStorage.getItem('singleNews');
const singleNews = JSON.parse(news);
console.log(singleNews);


newsData.innerHTML = `
    <div id="single-box">
    <img src="${singleNews.urlToImage}" class = "w-50" align="right" alt="">
    <h1> ${singleNews.title} </h1>
        <p  id="publish-date"> Published at: ${singleNews.publishedAt}</p>
        <h6> ${singleNews.description} </h6>
        <p> ${singleNews.content}</p>
        <a href="${singleNews.url}">Read Complete News</a>
    </div>`


function goBack() {
    window.location = 'index.html'
}
