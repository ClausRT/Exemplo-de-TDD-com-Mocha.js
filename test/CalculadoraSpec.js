var expect = require('chai').expect,
    Calculadora = require('../app/Calculadora'),
    cal = new Calculadora();

describe("Class Calculadora", function() {
    describe("Function Soma", function() {
        it("should return 1 when passed 0 and 1", function() {
            expect(cal.soma(0, 1)).to.equal(1);
        });

        it("should return -1 when passed 0 and -1", function() {
            expect(cal.soma(0, -1)).to.equal(-1);
        });

        it("should return 3 when passed 0, 1 and 2", function() {
            expect(cal.soma(0, 1, 2)).to.equal(3);
        });

        it("should return 6 when passed 0, 1, 2 and 3", function() {
            expect(cal.soma(0, 1, 2, 3)).to.equal(6);
        });
    });
    describe("Function Divisao", function() {
        it("should return 0 when passed 0 and 1", function() {
            expect(cal.divisao(0, 1)).to.equal(0);
        });
    })
});