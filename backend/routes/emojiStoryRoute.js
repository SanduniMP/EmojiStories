import express from "express";
import {createStory, getStories, likeStory} from "../controllers/storyController.js";

const router = express.Router()

router.post("/stories", createStory);
router.get("/stories", getStories);

export default router