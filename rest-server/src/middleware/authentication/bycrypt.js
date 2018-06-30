import { compare, genSalt, hash } from 'bcrypt';

export const hashPassword = async(password) => {
  try {
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);
    return hashedPassword;
  } catch(err) {
    new Error('failed to hash password -', err);
  }
};

export const PasswordVerification = async(password, hash) => {
  try {
    const result = await compare(password, hash);
    return result;
  } catch(err) {
    new Error('failed to verify password -', err);
  }
};