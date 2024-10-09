import { checkResponse } from "./utils";
import { getToken } from "../utils/token";
import { fetchNews } from "./NewsApi";

const baseUrl = "http://localhost:3001";

export function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

const getNews = (query) => {
  const newsUrl = fetchNews(query);

  return request(newsUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const saveArticles = (articleData) => {
  const token = getToken();

  return request(`${baseUrl}/articles`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleData),
  });
};
const unsaveArticle = (articleId) => {
  const token = getToken();

  return request(`${baseUrl}/articles/${articleId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
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
