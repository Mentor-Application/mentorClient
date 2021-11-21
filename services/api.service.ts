import { environment } from "./../environments/environments";
import axios from "axios";

export class ApiService {
  options = {
    "Content-Type": "application/json",
  };

  async get(url: string) {
    try {
      const response = await axios.get(`${environment.api_url}/${url}`, {
        headers: this.options,
      });
      const data = response.data;
      return data;
    } catch (err) {
      {
        err;
      }
    }
  }

  async post(url: string, data: any) {
    const response = await axios
      .post(`${environment.api_url}/${url}`, data)
      .then((res) => {
        return res.data;
      })
      .catch((res) => {
        console.log(res);
      });
    return response;
  }
}
