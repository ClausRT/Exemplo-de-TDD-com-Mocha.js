var expect = require("chai").expect,
    fatorial = require("../app/fatorial.js");

describe.skip("Fatorial Function", () => {
    it("should return 1 when passed 0", () => {
        expect(fatorial(0)).to.equal(1);
    });

    it("should reurn 1 when passed 1", () => {
        expect(fatorial(1)).to.equal(1);
    });

    it("should reurn 2 when passed 2", () => {
        expect(fatorial(2)).to.equal(2);
    });

    it("should reurn 6 when passed 3", () => {
        expect(fatorial(3)).to.equal(6);
    });

    it("should reurn 24 when passed 4", () => {
        expect(fatorial(4)).to.equal(24);
    });

    it("should reurn 120 when passed 5", () => {
        expect(fatorial(5)).to.equal(120);
    });
});