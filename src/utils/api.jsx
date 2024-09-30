import { checkResponse } from "./utils";
import { getToken } from "../utils/token";

const  baseUrl = "http://localhost:3001";

export function request(url, options) {
    return fetch(url, options).then(checkResponse);
}

const getNews = (query) => {
    return request(`${baseUrl}/everything/`, {
        method: "GET",
        headers: {
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
    getUserInfo,
  };
  
  export default api;