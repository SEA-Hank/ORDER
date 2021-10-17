import axios from "axios";
import { ajaxError } from "../redux/actions";
import fakeData from "./fake_data";
axios.defaults.baseURL = "http://192.168.0.5:5000/client";
let usingTestData = true;
export default async ({ method, url, data, dispatch }) => {
  if (usingTestData) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1000 * 2, fakeData[url]);
    });
  }
  return axios({
    method,
    url,
    data,
  })
    .catch((error) => {
      dispatch(ajaxError(error.message));
      return Promise.reject();
    })
    .then((rep) => {
      return rep.data;
    });
};
