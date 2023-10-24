const div = document.querySelector('#container');
const loading = document.querySelector('#loading')
const showMore = document.querySelector('#showMore')



let allNews;
function renderNews() {
    allNews.forEach((item , index) => {
        div.innerHTML += `<div class="card mb-3 bg-black text-white border-dark" style="width: 18rem;">
        <img src="${item.urlToImage ? item.urlToImage : 'https://c.ndtvimg.com/2018-12/m6qdlvuo_nawaz-sharif-pti_625x300_30_December_18.jpg'}" class="card-img-top" id="image" alt="...">
        <div class="card-body ">
          <h5 class="card-title">${item.title.slice(0 , 40)}....</h5>
          <p class="card-text">${item.description.slice(0 , 65)}...</p>
          <button onclick="saveData(${index})" class="btn btn-primary">See More</button>
        </div>
      </div>`
    });
}
async function getNews() {
    try {
        const news = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=3f4add8c98254fe7bc1b4b84122db37b')
        const res = await news.json()
        console.log(res.articles);
        loading.className = 'invisible'
        allNews = res.articles
        renderNews()
    } catch (error) {
        console.log(error);
    }finally{
    }
}
getNews();


function saveData(index) {
    let newsIndex = allNews[index]
    console.log(newsIndex);

    const setnews = JSON.stringify(newsIndex)
    localStorage.setItem('singleNews' , setnews)

    window.location = "news.html"
}
