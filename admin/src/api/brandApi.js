import axiosClient from "./axiosClient";

const brandApi = {
  getAll() {
    const url = "brand/all";
    return axiosClient.get(url);
  },
  getById(id) {
    const url = `brand/${id}`;
    return axiosClient.get(url);
  },
  create(data) {
    const url = "brand/create";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = "brand/update";
    return axiosClient.post(url, data);
  },
  delete(id) {
    const url = `brand/delete/${id}`;
    return axiosClient.delete(url);
  },
};

export default brandApi;
