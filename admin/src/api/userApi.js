import axiosClient from "./axiosClient";

const userApi = {
  login(data) {
    const url = "auth/login";
    return axiosClient.post(url, data);
  },
  activeUser(data) {
    const url = "auth/active";
    return axiosClient.post(url, data);
  },
  getAll() {
    const url = "user/all";
    return axiosClient.get(url);
  },
};

export default userApi;
