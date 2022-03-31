import { isValidScript } from './utils';

describe('isValidScript', () => {
  test('returns true for valid script', () => {
    const validScript = "<script src='https://12345678b4488af2f8c8bf2f54287.js.ubembed.com' async></script>";

    expect(isValidScript(validScript)).toBeTruthy();
  });

  test('returns false for invalid script', () => {
    const validScript = '<script 8b4488af2f8c8bf2f54287 async></script>';

    expect(isValidScript(validScript)).toBeFalsy();
  });
});
