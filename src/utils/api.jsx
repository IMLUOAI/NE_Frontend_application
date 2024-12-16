import { checkResponse } from "./utils";
import { getToken } from "../utils/token";

const baseUrl = "http://localhost:3001";

const currentUser = { id: "1", name: "Samuel" };

export function request(url, options) {
  return new Promise((resolve) => {
    //   return fetch(url, options).then(checkResponse);
    setTimeout(() => {
      resolve({ message: "Success", data: { name: "Samuel", id: "1" } });
    }, 100);
  });
}

let savedArticlesList = [];

const getNews = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });
};

const savedArticles = (articleData) => {
  const token = getToken();
  return new Promise((resolve, reject) => {
    if (!token) {
      reject("No token found");
    }

    const newArticle = { ...articleData, id: "articleData.id" };
    savedArticlesList.push(articleData);

    resolve(newArticle);
  });
};
const unsaveArticle = (article) => {
  const token = getToken();
  return new Promise((resolve, reject) => {
    if (!token) {
      return reject({ status: 401, message: "Unauthorized" });
    }
    setTimeout(() => {
      resolve({ ...article, id: article.source?.id });
    }, 100);
    const response = {
      ok: true,
      status: 200,
      statusText: "OK",
    };
    resolve(response);
  });
};

const getSavedArticles = () => {
  const token = getToken();
  return new Promise((resolve, reject) => {
    if (!token) {
      reject("No token found");
    }
    setTimeout(() => {
      resolve(savedArticlesList || []);
    }, 100);
  });
};

const deleteArticle = (articleId) => {
  const token = getToken();
  return new Promise((resolve, reject) => {
    if (!token) {
      reject("No token found");
    }
    if (!articleId) {
      reject("No article id found");
    }
    const initialLength = savedArticlesList.length;
    savedArticlesList = savedArticlesList.filter(
      (article) => article.source?.id !== articleId
    );
    if (savedArticlesList.length === initialLength) {
      reject("Articles not found");
    } else {
      resolve({
        ok: true,
        status: 200,
        statusText: "OK",
      });
    }
  });
};

const getUserInfo = () => {
  const token = getToken();
  return new Promise((resolve, reject) => {
    if (!token) {
      reject("No token found");
    }
    resolve({
      name: "Samuel",
      id: "65f7371e7bce9e7d331b11a0",
      email: "samuel1234@gmail.com",
    });
    return request(`${baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  });
};

const api = {
  getNews,
  savedArticles,
  unsaveArticle,
  getSavedArticles,
  deleteArticle,
  getUserInfo,
};

export default api;
