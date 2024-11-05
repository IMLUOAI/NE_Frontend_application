import { APIKEY, parsePreviousWeek } from "./constant";

export const getSearchNews = async (keyWord) => {
  if (!keyWord) {
    return Promise.reject(`Error: ${keyWord}`);
  }

  return fetch(
    `https://newsapi.org/v2/everything?q=${keyWord}&from=${parsePreviousWeek}$sortBy=publishedAt&apiKey=${APIKEY}`
  )
    .then((res) =>
      res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
    )
    .then((res) => {
      console.log("API response:", res);
      return {
        ...res,
        articles: res.articles.filter(
          (article) => article.title != "[Removed]"
        ),
      };
    })
    .catch((error) => {
      console.error("Error fetching news:", error);
      return Promise.reject(error);
    });
};
