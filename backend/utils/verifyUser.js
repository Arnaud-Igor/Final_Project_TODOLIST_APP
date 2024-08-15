import { errorHandler } from "./error.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return next(errorHandler(401, "Unauthorized"));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }

  // jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
  //   if (err) {
  //     return next(errorHandler(403, "Forbidden"));
  //   }

  //   req.user = user;
  //   next();
  // });
};
