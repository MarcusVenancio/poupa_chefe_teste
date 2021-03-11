import axios from 'axios';
import { Redirect } from 'react-router';
import Swal from 'sweetalert2';

import * as storage from "../utils/storage.js";

const env = "https://psad9m6vrj.execute-api.sa-east-1.amazonaws.com";

export const clients = {
  auth: axios.create({
    baseURL:`${env}/test`,
  }),
  user: axios.create({
    baseURL:`${env}/test`
  })
}

const logRequest = request => {
  console.log("-------API-REQUEST--------");
  console.log(request);
  console.log("---------------");
};

clients.auth.interceptors.request.use(
  config => {
    const originalRequest = config;
    originalRequest.headers.Authorization = `Basic cG91cGFjaGVmLXRlc3Q6ZGQzZWQ5MGUtNjY3Zi00MjQ4LWE2NzEtOTI2NjI2MWRiYTVi`;
    logRequest(originalRequest);
    return originalRequest;
  }, err => {
    console.log(err);
  }
)

clients.user.interceptors.request.use(
  config => {
    const originalRequest = config;
    const token = storage.getTokenFromStorage();
    originalRequest.headers.Authorization = `Bearer ${token}`;
    logRequest(originalRequest);
    return originalRequest;
  }
);

clients.auth.interceptors.response.use(
  res => res, err => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algo deu errado! Confira os dados de acesso.',
    })
    return err
  }
);

clients.user.interceptors.response.use(
  res => res, err => {
    if (err.response.status === 401) {
      storage.removeItemFromStorage(storage.TOKEN_KEY);
      window.location = "/login";
    }
    return err
  }
);