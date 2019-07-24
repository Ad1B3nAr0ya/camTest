"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");

class CamApi {

    constructor() {
        this.axios = axios_1.default.create();
        this.axios.defaults.baseURL = "https://UAT-lambda.cloud.flir/api/"
        this.axios.defaults.withCredentials = true;
        this.axios.defaults.maxRedirects = 0;
        this.axios.defaults.headers.common['Content-Type'] = 'application/json';
    }

    static get Instance() {
        if (CamApi.instance === undefined) {
            CamApi.instance = new CamApi();
        }
        return CamApi.instance;
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

    callApi(method, url, data, config) {
        const requestConfig = Object.assign({ method: method, url: url, data: data }, config);
        console.log(`Send '${method}' request to '${url}'`);
        console.log(`DATA >> ${data}`);

        return async () =>  await this.axios(requestConfig)
            .then((responseValue) => {
                return responseValue;
            })
            .catch((err) => {
                console.log(`ERROR: ${err}`);
                throw err;
            });
    }
}

exports.CamApi = CamApi;