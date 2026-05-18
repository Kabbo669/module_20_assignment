import jwt from "jsonwebtoken";

export const signAuthToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "1d"});
};