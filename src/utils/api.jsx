import { checkResponse } from "./utils";
import { getToken } from "../utils/token";
// import { fetchNews } from "./NewsApi";

const baseUrl = "http://localhost:3001";

export function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

const getNews = () => {
  getNews().then(data => console.log(data));
  return new Promise((resolve, reject) => resolve([
    {
      id: "65f7368dfb74bd6a92114c85",
      url: "https://www.msn.com/en-us/news/us/hurricane-milton-batters-floridas-west-coast-with-hurricanes-home-destruction-updates/ar-AA1rXgIs?ocid=BingNewsSerp",
      title: "Hurricane Milton batters Florida's west coast with hurricanes, home destruction",
    
    },
    {
      id: "65f7368dfb74bd6a92114c85",
      url: "",
      title: ""
    }
  ]))
  // const newsUrl = fetchNews(query);

  // return request(newsUrl, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
};

const saveArticles = (articleData) => {
const token = getToken();
  return new Promise((resolve, reject) => {
    if (!token) {
      reject('No token found');
    }
  resolve({
    id: "65f7371e7bce9e7d331b11a0",
    url: articleData.url,
    title: articleData.title,
    imageUrl: article.imageUrl
  })
  }
  )
  // const token = getToken();

  // return request(`${baseUrl}/articles`, {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(articleData),
  // });
};
const unsaveArticle = (articleId) => {
  const token = getToken();
  return new Promise((resolve, reject) => {
 if (!token) {
  reject ('No token found')
 }
 resolve ({ message: "Article unsaved" });
});
  // return request(`${baseUrl}/articles/${articleId}`, {
  //   method: "DELETE",
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //     "Content-Type": "application/json",
  //   },
  // });
};

const getSavedArticles = () => {
  const token = getToken();

  return request(`${baseUrl}/articles`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

const getUserInfo = () => {
  const token = getToken();

  return request(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

const api = {
  getNews,
  saveArticles,
  unsaveArticle,
  getSavedArticles,
  getUserInfo,
};

export default api;
