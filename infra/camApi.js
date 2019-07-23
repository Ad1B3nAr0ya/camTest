
const axios_1 = require("axios");

class camApi {

    constructor() {
        this.axios = axios_1.default.create();
        this.axios.defaults.baseURL = "https://UAT-lambda.cloud.flir/api/"
        this.axios.defaults.withCredentials = true;
        this.axios.defaults.maxRedirects = 0;
        this.axios.defaults.headers.common['Content-Type'] = 'application/json';
        //this.axios.defaults.headers.common.referer = `${UrlUtil_1.urlUtil.baseUrl()}/console`;
    }

    static get Instance() {
        if (camApi.instance === undefined) {
            camApi.instance = new camApi();
        }
        return camApi.instance;
    }

    deleteRequest(url, data, config) {
        return this.callApi('DELETE', url, data, config);
    }

    getRequest(url, data, config) {
        return this.callApi('GET', url, data, config);
    }

    postRequest(url, data, config) {
        return this.callApi('POST', url, data, config);
    }
}