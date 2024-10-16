import { checkResponse } from "./utils";
import { getToken } from "../utils/token";
// import { fetchNews } from "./NewsApi";

const baseUrl = "http://localhost:3001";
const currentUser = { _id: "1", name: "Samuel" };

export function request(url, options) {
  return new Promise((resolve) => {
    //   return fetch(url, options).then(checkResponse);
    setTimeout(() => {
      resolve({ message: "Success", data: { name: "Samuel", id: "1" } });
    }, 1000);
  });
}

const getNews = () => {
  getNews().then((data) => console.log(data));
  return new Promise((resolve) =>
    resolve([
      {
        id: "65f7368dfb74bd6a92114c85",
        owner: "1",
        url: "https://www.msn.com/en-us/news/us/hurricane-milton-batters-floridas-west-coast-with-hurricanes-home-destruction-updates/ar-AA1rXgIs?ocid=BingNewsSerp",
        title:
          "Hurricane Milton batters Florida's west coast with hurricanes, home destruction",
        publishedAt: "2021-09-27T14:00:00Z",
        description:
          "Hurricane Milton batters Florida's west coast with hurricanes, home destruction",
        sourceName: "msn.com",
      },
      {
        id: "65f7368dfb74bd6a92114c85",
        url: "https://everydayastronaut.com/why-dont-they-just-launch-rockets-from-mountains-or-the-equator/",
        title:
          "Why Don’t They Just Launch Rockets From Mountains Or The Equator?",
        publishedAt: "on November 9, 2023",
        description:
          "It’s fairly common that Tim gets asked interesting and thought-provoking questions, that often begin with the words “Why don’t they just…” – and are then followed with a concept that seems like a great idea. One example might be “Why don’t they just launch rockets from the top of a mountain? It would be closer to space in altitude, so less distance to travel, and there would be less air resistance due to lower pressure at that altitude!”",
        sourceName: "everydayastronaut.com",
      },
    ])
  );
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
      reject("No token found");
    }
    resolve({
      id: "65f7371e7bce9e7d331b11a0",
      url: articleData.url,
      title: articleData.title,
      imageUrl: article.imageUrl,
    });
  });
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
      reject("No token found");
    }
    resolve({ message: "Article unsaved" });
  });
  // return request(`${baseUrl}/articles/${articleId}`, {
  //   method: "DELETE",
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //     "Content-Type": "application/json",
  //   },
  // });
};

// const getSavedArticles = () => {
//   const token = getToken();

//   return request(`${baseUrl}/articles`, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//     },
//   });
// };

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
    //   return request(`${baseUrl}/users/me`, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });
  });
};

const api = {
  getNews,
  saveArticles,
  unsaveArticle,
  //   getSavedArticles,
  getUserInfo,
};

export default api;
