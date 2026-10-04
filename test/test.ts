import {
    multiply,
    calculatePercentage,
    isEven,
    compareStrings,
    isPositive
} from "../src/functions";

test("multiply", () => {
    expect(multiply(5, 4)).toBe(20);
});

test("calculatePercentage", () => {
    expect(calculatePercentage(200, 10)).toBe(20);
});

test("isEven - even number", () => {
    expect(isEven(4)).toBe(true);
});

test("isEven - odd number", () => {
    expect(isEven(5)).toBe(false);
});

test("compareStrings - same strings", () => {
    expect(compareStrings("Hello", "Hello")).toBe(true);
});

test("compareStrings - different strings", () => {
    expect(compareStrings("Hello", "World")).toBe(false);
});

test("isPositive - positive number", () => {
    expect(isPositive(10)).toBe(true);
});

test("isPositive - negative number", () => {
    expect(isPositive(-5)).toBe(false);
});