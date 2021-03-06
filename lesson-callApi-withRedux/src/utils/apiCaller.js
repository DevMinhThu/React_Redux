import axios from "axios";
import * as Config from "./../constants/Config";

/* 
    Cần 3 tham số:
    - endpoint
    - method
    - data  
*/
export default function callApi(endpoint, method = "GET", body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/${endpoint}`,
    data: body,
  }).catch((err) => {
    console.log(err);
  });
}
