import { checkResponse } from "./utils";


const apiKey = 'c1b97c0823a44c9083a35aac091b098c';
const url = 
`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}c1b97c0823a44c9083a35aac091b098c`;

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
        
        `;
        newsContainer.appendChild(newsItem);
    })
}

fetchNews();