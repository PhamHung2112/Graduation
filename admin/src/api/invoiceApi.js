import axiosClient from "./axiosClient";

const invoiceApi = {
  getAll() {
    const url = "invoice/all";
    return axiosClient.get(url);
  },
};

export default invoiceApi;
