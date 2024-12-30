import React from "react";

const EmojiPicker = ({ emojiSequence, setEmojiSequence, setTranslation }) => {
    const handleEmojiSelect = (emoji) => {
        const updatedSequence = [...emojiSequence, emoji];
        setEmojiSequence(updatedSequence);

        setTranslation(`Story based on: ${updatedSequence.join(" ")}`);
    };

    return (
        <div className="emoji-picker">
            <h2>Compose Your Story</h2>
            <div>
                {["😀", "🌟", "🏖️", "🚀", "🐶"].map((emoji) => (
                    <button
                        key={emoji}
                        onClick={() => handleEmojiSelect(emoji)}
                        className="emoji-button"
                    >
                        {emoji}
                    </button>
                ))}
            </div>
            <div className="current-sequence">
                <h3>Your Story:</h3>
                <p>{emojiSequence.join(" ") || "Start composing your story!"}</p>
            </div>
        </div>
    );
};

export default EmojiPicker;
