const addFive = require("./addFive");

test("should add 1 to 5 and eqals 6", () => {
	expect(addFive(1)).toBe(6);
});
