import qs from "qs";
import { pathParams } from "path-params";

const Utils = {
  validateResponse(error, response) {
    const e = {...error}
    if (error.status === 400) {
      return error
    }
    if (error) {
      if (/network is offline/.test(error.message)) {
        return "No Internet Connection, Check your connection & restart the application\n";
      }

      if (error.timeout === 10000) {
        return 10000;
      }

      return `${
        error.message ||
        "error"
      }\n`;
    }

    if (response.status !== 2 || response.status !== "success") {
      return `${response.message || "unknown error"}\n`;
    }

    return "";
  },
  parseJwt(token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  },
  getFullName(user) {
    return `${user.first_name || ""} ${user.last_name || ""} ${user.surname || ""} `
  },
  createUrl(path, options) {
    const query = qs.stringify(options.query);
    const url = [path, query].filter(Boolean).join("?");

    if (options.params) {
      return pathParams(url, options.params);
    }

    return url;
  },
  parseQuery(search) {
    return (qs.parse(search.replace("?", "")) || {});
  }
}
export default Utils;
