import axiosClient from "./axiosClient";

const sizeApi = {
  getAll() {
    const url = "size/all";
    return axiosClient.get(url);
  },
  getById(id) {
    const url = `size/${id}`;
    return axiosClient.get(url);
  },
  create(data) {
    const url = "size/create";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = "size/update";
    return axiosClient.post(url, data);
  },
  delete(id) {
    const url = `size/delete/${id}`;
    return axiosClient.delete(url);
  },
};

export default sizeApi;
