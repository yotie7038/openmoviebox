import { create } from "zustand";
import {
  clearSavedLogss,
  getDeviceId,
  getVariables,
  setUser,
  setVariables,
} from "./util-functions";

export class UserRegistration {
  address: string;
  constructor() {
    this.address = `${process.env.NEXT_PUBLIC_API_URL}`;
  }
  async getExtractError(api: Response) {
    if (api.ok) {
      return await api.json();
    }
    if (api.status == 404) {
      return "Page Not found";
    }
    if (api.status == 401) {
      return "You are not authorized";
    }
    if (api.status == 400) {
      const { message } = await api.json();
      return message;
    }
    if (api.status >= 500) {
      return "There was internal server error";
    }
    return "something went wrong";
  }

  async login(data: object) {
    try {
      const api = await fetch(this.address + "/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-device-id": getDeviceId(),
          platform: "admin",
        },
        body: JSON.stringify(data),
      });
      if (api.ok) {
        const data = await api.json();
        setVariables(data);
        return this.fetchUser(data);
      }
      return this.getExtractError(api);
      // eslint-disable-next-line no-unused-vars
    } catch (e) {
      return "Failed to connect to server ";
    }
  }
  async fetchUser(data: { retry: boolean }): Promise<object | string> {
    try {
      const api = await fetch(this.address + "/user/fetch", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + getVariables().accessTokens,
          "X-device-id": getDeviceId(),
          platform: "admin",
        },
      });
      if (api.ok) {
        return setUser(await api.json());
      }
      if (api.status == 401) {
        if (data.retry) return this.requestNewTokens();
        return "you are not authorized to use this platform";
      }
      clearSavedLogss();
      return this.getExtractError(api);
      // eslint-disable-next-line no-unused-vars
    } catch (e) {
      return "Failed to connect to server ";
    }
  }
  async requestNewTokens() {
    try {
      const api = await fetch(this.address + "v1/user/newToken", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + getVariables().refreshTokens,
          "X-device-id": getDeviceId(),
        },
      });
      if (api.ok) {
        const data = await api.json();
        setVariables(data);
        return await this.fetchUser({ retry: false });
      }
      clearSavedLogss();
      return this.getExtractError(api);
      // eslint-disable-next-line no-unused-vars
    } catch (e) {
      return "Failed to connect to server ";
    }
  }
}
export const useUserState = create(() => ({
  firstName: "",
  lastName: "",
  email: "",
}));
