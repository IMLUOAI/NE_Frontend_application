import { checkResponse } from "./utils";
import { getToken } from "../utils/token";

const  baseUrl = "http://localhost:3001";

export function request(url, options) {
    return fetch(url, options).then(checkResponse);
}

const getItems = () => {
    return  request(`${baseUrl}/items/`, {
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
    getItems,
    getUserInfo,
  };
  
  export default api;