import express from "express";
import { checkAuth } from "../middleware/checkAuth.js";
import {
  getUserProfile,
  getUsers,
  updateUser,
  getUser,
  getUserByReview,
  getReviews,
  getSaves,
} from "../controllers/user.js";

const router = express.Router();

router.get("/get/:id", getUser);
router.get("/saves/:id", checkAuth, getSaves);
router.get("/reviews/:id", getReviews);
router.get("/get-by-review/:id", getUserByReview);
router.get("/profile/:userId", getUserProfile);

router.post("/update/:id", checkAuth, updateUser);

export default router;
