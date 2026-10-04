import {
    multiply,
    calculatePercentage,
    isEven,
    compareStrings,
    isPositive
} from "../src/functions/calculator";

test("multiply - positive numbers", () => {
    expect(multiply(5, 4)).toBe(20);
});

test("multiply - with zero", () => {
    expect(multiply(10, 0)).toBe(0);
});

test("calculatePercentage - 10 percent", () => {
    expect(calculatePercentage(200, 10)).toBe(20);
});

test("calculatePercentage - 50 percent", () => {
    expect(calculatePercentage(100, 50)).toBe(50);
});

test("isEven - even number", () => {
    expect(isEven(4)).toBeTruthy();
});

test("isEven - odd number", () => {
    expect(isEven(5)).toBeFalsy();
});

test("compareStrings - same strings", () => {
    expect(compareStrings("Hello", "Hello")).toBeTruthy();
});

test("compareStrings - different strings", () => {
    expect(compareStrings("Hello", "World")).toBeFalsy();
});

test("isPositive - positive number", () => {
    expect(isPositive(10)).toBeTruthy();
});

test("isPositive - negative number", () => {
    expect(isPositive(-5)).toBeFalsy();
});