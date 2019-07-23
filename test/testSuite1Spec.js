const describe = require("mocha");
const AuthenticationService = require("infra/AuthenticationService.js");


const authenticationService = new AuthenticationService();

describe("Suite Description - > Authentication Tests", () => {


    it("ID_1- Login existing user",() => {
        // Test logic here...
      const response =  authenticationService.login("borisflir+uatEU@gmail.com","Flir2018$", 600)

        // validation example...
        expect(response.email).equal("aaa@aaa.com");

    });

    it("ID_2- Login non existing user",() => {
        // Test logic here...
        authenticationService.login("lalala","blalbla", "1.1.2023")

        // validation example...
        expect(authService.login("lalala","blalbla")).to.throw(Error)

    });
});
