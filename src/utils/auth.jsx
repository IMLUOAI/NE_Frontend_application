import { request } from "./api";

const BASE_URL = "http://localhost:3001";

const register = (email, password, username) => {
  return request(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, username }),
  });
};

const authorize = (email, password) => {
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token" });
  });
  return request(`${BASE_URL}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
};

const checkTokenValidity = (token) => {
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "Samuel", email: "samuel2024@gmail.com", id: "id" },
    });
  });
  return request(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

const auth = {
  register,
  authorize,
  checkTokenValidity,
};

export default auth;
