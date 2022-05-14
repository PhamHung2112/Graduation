import axiosClient from "./axiosClient";

const typeApi = {
  getAll() {
    const url = "type/all";
    return axiosClient.get(url);
  },
  getById(id) {
    const url = `type/${id}`;
    return axiosClient.get(url);
  },
  create(data) {
    const url = "type/create";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = "type/update";
    return axiosClient.post(url, data);
  },
  delete(id) {
    const url = `type/delete/${id}`;
    return axiosClient.delete(url);
  },
};

export default typeApi;
