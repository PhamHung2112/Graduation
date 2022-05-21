import axiosClient from "./axiosClient";

const invoiceDetailApi = {
  getAll() {
    const url = "invoiceDetail/all";
    return axiosClient.get(url);
  },
};

export default invoiceDetailApi;
