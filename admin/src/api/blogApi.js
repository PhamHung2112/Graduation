import axiosClient from "./axiosClient";

const blogApi = {
  getAll(limit, page) {
    const url = `blog/all?limit=${limit}&page=${page - 1}`;
    return axiosClient.get(url);
  },
  getById(id) {
    const url = `blog/${id}`;
    return axiosClient.get(url);
  },
  create(data) {
    const url = "blog/create";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = "blog/update";
    return axiosClient.post(url, data);
  },
  delete(id) {
    const url = `blog/delete/${id}`;
    return axiosClient.delete(url);
  },
};

export default blogApi;
