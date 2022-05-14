const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const authMiddleware = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6eyJlbWFpbCI6InBoYW0uaHVuZy4wNjEwMjBAZ21haWwuY29tIiwiaWRVc2VyIjoyfSwiaWF0IjoxNjUyNTI4MTMzLCJleHAiOjE2NTUxMjAxMzN9.mlsKYiTiFGN3NLUuZ51NeN3kwHq4YA1O-c24YGlLyVM";
  console.log("========================token");
  console.log(token);
  if (!token) return res.status(401).json({ message: "Vui lòng đăng nhập" });

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    console.log({ decoded, user });
    next();
    return;
  } catch (error) {
    res.status(403).json({ error });
    return res.status(403).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;
