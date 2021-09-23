import axios from "axios";
import { ajaxError } from "../redux/actions";
axios.defaults.baseURL = "http://192.168.0.5:5000/client";
export default ({ method, url, data, dispatch }) => {
  return axios({
    method,
    url,
    data,
  })
    .catch((error) => {
      console.log(error);
      dispatch(ajaxError(error.message));
      return Promise.reject();
    })
    .then((rep) => {
      return rep.data;
    });
};
