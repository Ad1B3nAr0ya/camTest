//Support generic method (that will serve test layer)

const AUTH_API_URL_PREFIX = 'authentication/login';

const camApi = require("./camApi")

class authenticationService {

    constructor() {
        this.camApi = camApi.Instance;
    }

    login(un, pw, experation_duration) {
        const response = this.camApi.postRequest(`${AUTH_API_URL_PREFIX}`, {
            username: un,
            password: pw,
            experationDuration: experation_duration,
        });

        console.log(response);
    }

}
