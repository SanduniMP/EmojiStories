import { EmojiStory } from "../models/emojiStoryModel.js";
import { translateEmojis } from "../utils/translateEmojis.js";

export const createStory = async (req, res) => {
    const { emojiSequence, authorNickname } = req.body;

    if (!emojiSequence || !authorNickname) {
        return res.status(400).json({ error: "Emoji sequence and nickname are required." });
    }

    const translation = translateEmojis(emojiSequence);

    try {
        const story = await EmojiStory.create({
            emojiSequence,
            translation,
            authorNickname,
        });
        res.status(201).json(story);
    } catch (error) {
        res.status(500).json({ error: "Failed to create story." });
    }
};

export const getStories = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;

    try {
        const stories = await EmojiStory.find()
            .sort({ likes: -1, createdAt: -1 })
            .skip((+page - 1) * +limit)
            .limit(+limit);
        res.status(200).json(stories);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch stories." });
    }
};
