const NEWS_API_URL = "https://newsapi.org/v2/everything";
const API_KEY = "c1b97c0823a44c9083a35aac091b098c";

export const fetchNews = async (query) => {
  const url = `${NEWS_API_URL}?q=${query}&from=2021-10-14&to=2021-10-14&sortBy=popularity&apiKey=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data.articles;
};
