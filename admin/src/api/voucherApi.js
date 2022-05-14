import axiosClient from "./axiosClient";

const voucherApi = {
  getAll() {
    const url = "voucher/all";
    return axiosClient.get(url);
  },
  getById(id) {
    const url = `voucher/${id}`;
    return axiosClient.get(url);
  },
  create(data) {
    const url = "voucher/create";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = "voucher/update";
    return axiosClient.post(url, data);
  },
  delete(id) {
    const url = `voucher/delete/${id}`;
    return axiosClient.delete(url);
  },
};

export default voucherApi;
