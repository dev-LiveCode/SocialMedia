import express from "express";
import {
    createPosts,
    getFeedPosts,
    getUserPosts,
    likePost
} from '../controllers/posts.js';
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// CREATE
router.post("/", verifyToken, createPosts);

// READ
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

// UPDATE
router.patch("/:id/like", verifyToken, likePost);

export default router;
