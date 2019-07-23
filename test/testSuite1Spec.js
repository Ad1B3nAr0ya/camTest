import {describe} from "mocha";
import { authenticationService } from "infra/authenticationService.js"

describe("Suite Description - > Testing Cam", () => {

    beforeEach(() => {
        const authService = new authenticationService();
    });

    it("ID_1- Login existing user",() => {
        // Test logic here...
        authService.login("aaa","aaa")

        // validation example...
        expect(username).equal("aaa");

    });

    it("ID_2- Login non existing user",() => {
        // Test logic here...
        authService.login("lalala","blalbla")

        // validation example...
        expect(authService.login("lalala","blalbla")).to.throw(Error)

    });
});
