import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

export const mockWallets = {
  wallet1: {
    address: '0x1111111111111111111111111111111111111111',
    json: '{"address":"0x1111111111111111111111111111111111111111"}'
  },
  wallet2: {
    address: '0x2222222222222222222222222222222222222222',
    json: '{"address":"0x2222222222222222222222222222222222222222"}'
  }
};

export const testPasswords = {
    // For encryption/decryption tests
    valid: 'Test123!StrongPassword',
    wrongPassword: 'WrongPassword123!',
    // For validation tests
    lessThan8: 'Short1!',
    noUppercase: 'test1234!',
    noLowercase: 'TEST1234!',
    noNumber: 'TestPassword!',
    noSpecialChar: 'Test1234',
    weak: 'Minimal1!',
    strong: 'StrongPassword123!'
}


console.error = vi.fn();
