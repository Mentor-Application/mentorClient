import { User } from "../interfaces";
import { ApiService } from "./api.service";
export class AuthService {
  apiservice: ApiService = new ApiService();

  loggedInUser: User | null;
  accessToken: string | null;

  set authToken(t: string | null) {
    if (t) {
      sessionStorage.setItem("accessToken", t);
    }
    this.accessToken = t;
  }

  get authToken(): string | null {
    return this.accessToken || sessionStorage.getItem("accessToken") || null;
  }

  set currentUser(value: User | null) {
    if (value) {
      sessionStorage.setItem("user", JSON.stringify(value));
    }
    this.loggedInUser = value;
  }

  get currentUser(): User | null {
    const str = sessionStorage.getItem("user");

    if (!this.loggedInUser && str) {
      this.loggedInUser = JSON.parse(str);
    }
    return this.loggedInUser || null;
  }

  login(data: Object) {
    this.apiservice.post("auth/login", data).then((res) => {
      const data = res;
      console.log(data);
      const { id, userName, email, roles, accessToken, tokenType } = data;
      this.loggedInUser = { id, userName, email, roles };
      this.authToken = `${tokenType} ${accessToken}`;
      console.log(this.authToken);
    });
    return data;
  }

  logout(): void {
    this.authToken = null;
    this.currentUser = null;
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("user");
  }
}
