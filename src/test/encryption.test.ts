import { describe, it, expect, beforeAll } from 'vitest';
import { Wallet } from 'ethers';
import { createWallet } from '../utils/createWallet';
import { getDecryptedWallet } from '../utils/getDecryptedWallet';
import { testPasswords } from './setup';

describe('Wallet Encryption & Decryption', () => {
  let encryptedWalletJson: string;
  let walletAddress: string;
  let walletPrivateKey: string;

  beforeAll(async () => {
    const wallet = Wallet.createRandom();
    walletAddress = wallet.address;
    walletPrivateKey = wallet.privateKey;

    encryptedWalletJson = await wallet.encrypt(testPasswords.valid);
  });

  it('createWallet function should generate a valid encrypted wallet', async () => {
    const walletObj = await createWallet(testPasswords.valid);
    
    expect(walletObj).toHaveProperty('address');
    expect(walletObj).toHaveProperty('json');
    expect(typeof walletObj.address).toBe('string');
    expect(typeof walletObj.json).toBe('string');
    
    expect(() => JSON.parse(walletObj.json)).not.toThrow();
    
    const parsedJson = JSON.parse(walletObj.json);
    expect(parsedJson).toHaveProperty('address');
    expect(parsedJson).toHaveProperty('id');
    expect(parsedJson).toHaveProperty('version');
  });

  it('should be able to decrypt an encrypted JSON wallet with the correct password', async () => {
    const decryptedWallet = await getDecryptedWallet(encryptedWalletJson, testPasswords.valid);
    
    expect(decryptedWallet.address).toBe(walletAddress);
    expect(decryptedWallet.privateKey).toBe(walletPrivateKey);
  });

  it('should throw an error when trying to decrypt with the wrong password', async () => {    
    await expect(getDecryptedWallet(encryptedWalletJson, testPasswords.wrongPassword))
      .rejects.toThrow();
  });

  it('create and decrypt operations should work together consistently', async () => {
    // 1. Create a new wallet
    const newWalletObj = await createWallet(testPasswords.valid);
    
    // 2. Decrypt this wallet
    const decryptedWallet = await getDecryptedWallet(newWalletObj.json, testPasswords.valid);
    
    // 3. The decrypted wallet address should match the created wallet address
    expect(decryptedWallet.address.toLowerCase()).toBe(newWalletObj.address.toLowerCase());
  });
});
