import { checkResponse } from "./utils";
import { getToken } from "../utils/token";
import getNewsUrl from "./NewsApi";


const  baseUrl = "http://localhost:3001";

export function request(url, options) {
    return fetch(url, options).then(checkResponse);
}

const getNews = (query) => {
    const  newsUrl = getNewsUrl(query);

    return request(newsUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
}

const saveArticles = (articleData) => {
    const token = getToken();

    return request(`${baseUrl}/articles`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body:JSON.stringify(articleData),
    })
}
const deleteArticle = (articleId) => {
    const token = getToken();

    return request(`${baseUrl}/articles/${articleId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        }
    })
}
 
const getSavedArticles = () => {
    const token = getToken();

    return request(`${baseUrl}/articles`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",  
        }
    })
}

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
    deleteArticle,
    getSavedArticles,
    getUserInfo,
  };
  
  export default api;