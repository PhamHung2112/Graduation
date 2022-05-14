import axiosClient from "./axiosClient";

const productApi = {
  getAll() {
    const url = "product/all";
    return axiosClient.get(url);
  },
  getById(id) {
    const url = `product/${id}`;
    return axiosClient.get(url);
  },
  create(data) {
    const url = "product/create";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = "product/update";
    return axiosClient.post(url, data);
  },
  delete(id) {
    const url = `product/${id}`;
    return axiosClient.delete(url);
  },
};

export default productApi;
