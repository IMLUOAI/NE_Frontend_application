import { checkResponse } from "./utils";


const apiKey = 'c1b97c0823a44c9083a35aac091b098c';
const url = 
`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;

async function fetchNews() {

    try{
        const response =  await fetch(url);
        const data = await response.json();
        displayNews(data.articles);
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

function displayNews(articles) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.innerHTML = `
        <img src="${article.urlToImage || 'default-image.jpg'}" alt="${article.title}" />        <div className="card__publishedAt">{card.publishedAt}</div>
        <div className="card__content">
          <h2 className="card__title">
            {card.title || "No available title"}
          </h2>
          <p className="card__description">
            {card.description || "No available content"}
          </p>
        </div>
        <p className="card__sourceName">{card.sourceName}</p>
  
        `;
        newsContainer.appendChild(newsItem);
    })
}

fetchNews();