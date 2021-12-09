// đính token vào tất cả các request
// 1. đính từng cái (không dùng)
// 2. axios interceptor (nghiên cứu)
// 3. tạo hàm request dùng chung

import axios from "axios";

export const request = ({ method, url, data, params }) => {
  const variables = {
    method,
    url,
    data,
    params,
  };

  const token = localStorage.getItem("a");

  if (token) {
    variables.headers = {
      Authorization: "Bearer " + token,
    };
  }
  return axios(variables);
};
