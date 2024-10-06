export const fetchNews = async () => {
  const apiKey = "c1b97c0823a44c9083a35aac091b098c";
  const url = `https://newsapi.org/v2/everything?q=tesla&from=2024-09-06&sortBy=publishedAt&apiKey=${apiKey}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data.articles;
};
