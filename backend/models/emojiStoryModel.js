import mongoose from "mongoose";

const emojiStorySchema = mongoose.Schema(
    {
        emojiSequence: {
            type: [String],
            required: true
        }
    },
    {
        translation: {
            type: String,
            required: true
        }
    },
    {
        authorNickname: {
            type: String,
            required: true
        }
    },
    {
        likes: {
            type: Number,
            default: 0
        }
    },
    {
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
)

export const EmojiStory = mongoose.model('EmojiStory', emojiStorySchema);