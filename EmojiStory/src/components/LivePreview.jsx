import React from "react";

const LivePreview = ({ emojiSequence, translation }) => {
    return (
        <div className="live-preview">
            <h2>Live Preview</h2>
            <p><strong>Emoji Sequence:</strong> {emojiSequence.join(" ")}</p>
            <p><strong>Translation:</strong> {translation || "Translation will appear here..."}</p>
        </div>
    );
};

export default LivePreview;
