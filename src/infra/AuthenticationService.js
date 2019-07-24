"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const AUTH_API_URL_PREFIX = 'authentication/login';

const CamApi_1 = require("./CamApi.js")

class AuthenticationServiceClass {

    constructor() {
        this.camApi =  CamApi_1.CamApi.Instance;
    }

    login(un, pw, expiration_duration) {
        const response = this.camApi.postRequest(`${AUTH_API_URL_PREFIX}`, {
            username: un,
            password: pw,
            expirationDuration: expiration_duration,
        });

        console.log(response);

        return response
    }

}

exports.authenticationService = new AuthenticationServiceClass();
