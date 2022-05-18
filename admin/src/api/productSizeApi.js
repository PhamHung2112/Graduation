import axiosClient from "./axiosClient";

const productSizeApi = {
  getAll() {
    const url = "productSize/all";
    return axiosClient.get(url);
  },
  getById(id) {
    const url = `productSize/${id}`;
    return axiosClient.get(url);
  },
  create(data) {
    const url = "productSize/create";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = "productSize/update";
    return axiosClient.post(url, data);
  },
  delete(id) {
    const url = `productSize/${id}`;
    return axiosClient.delete(url);
  },
};

export default productSizeApi;
