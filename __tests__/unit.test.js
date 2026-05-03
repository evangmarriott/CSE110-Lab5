// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber tests
test('isPhoneNumber returns true for (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber returns true for 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber returns false for 12345', () => {
  expect(isPhoneNumber('12345')).toBe(false);
});

test('isPhoneNumber returns false for abc-def-ghij', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// isEmail tests
test('isEmail returns true for user@example.com', () => {
  expect(isEmail('user@example.com')).toBe(true);
});

test('isEmail returns true for hello@test.org', () => {
  expect(isEmail('hello@test.org')).toBe(true);
});

test('isEmail returns false for notanemail', () => {
  expect(isEmail('notanemail')).toBe(false);
});

test('isEmail returns false for missing@domain', () => {
  expect(isEmail('missing@domain')).toBe(false);
});

// isStrongPassword tests
test('isStrongPassword returns true for Abc123', () => {
  expect(isStrongPassword('Abc123')).toBe(true);
});

test('isStrongPassword returns true for myPass_1', () => {
  expect(isStrongPassword('myPass_1')).toBe(true);
});

test('isStrongPassword returns false for 1startswithnum', () => {
  expect(isStrongPassword('1startswithnum')).toBe(false);
});

test('isStrongPassword returns false for ab (too short)', () => {
  expect(isStrongPassword('ab')).toBe(false);
});

// isDate tests
test('isDate returns true for 1/1/2024', () => {
  expect(isDate('1/1/2024')).toBe(true);
});

test('isDate returns true for 12/31/2023', () => {
  expect(isDate('12/31/2023')).toBe(true);
});

test('isDate returns false for 2024-01-01', () => {
  expect(isDate('2024-01-01')).toBe(false);
});

test('isDate returns false for 13/1/24 (year too short)', () => {
  expect(isDate('13/1/24')).toBe(false);
});

// isHexColor tests
test('isHexColor returns true for #fff', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('isHexColor returns true for #1a2b3c', () => {
  expect(isHexColor('#1a2b3c')).toBe(true);
});

test('isHexColor returns false for #gggggg', () => {
  expect(isHexColor('#gggggg')).toBe(false);
});

test('isHexColor returns false for #12345 (5 digits)', () => {
  expect(isHexColor('#12345')).toBe(false);
});
