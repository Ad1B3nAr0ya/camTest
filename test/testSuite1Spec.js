import {describe} from "mocha";

describe("Suite Description - > Testing Cam", () => {

    beforeEach(() => {
        prepareTest();
    });

    it("ID1212 - Test Description",() => {
        // Test logic here...

        // validation example...
        let size = {height: 100, width: 100};
        expect(size.height).equal(size.width);

    });
});
