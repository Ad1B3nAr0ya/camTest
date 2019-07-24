const expect = require('chai').expect

const authenticationService_1 = require("../src/infra/AuthenticationService");

const authService = authenticationService_1.authenticationService;

describe('Suite Description - > Authentication Tests', () => {

    it("ID_1- Login existing user",() => {
        // Test logic here...

      const response =  authService.login("borisflir+uatEU@gmail.com","Flir2018$", 600)

        // validation example...
        expect(response.email).equal("aaa@aaa.com");

    });

    it("ID_2- Login non existing user",() => {
        // Test logic here...
        authService.login("lalala","blalbla", "1.1.2023")

        // validation example...
        expect(authService.login("lalala","blalbla")).to.throw(Error)

    });
});
