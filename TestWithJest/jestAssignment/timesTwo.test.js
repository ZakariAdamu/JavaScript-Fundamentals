const timesTwo = require("./timesTwo");

test("should return the number times 2 equals 10", () => {
	expect(timesTwo(15)).toBe(30);
});
