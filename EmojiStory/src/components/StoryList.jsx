import React, { useEffect, useState } from "react";

const StoryList = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const sampleStories = [
            { id: 1, emojiSequence: "😀🌟🏖️", translation: "Happy star vacation", likes: 5 },
            { id: 2, emojiSequence: "🚀🐶", translation: "Dog in space", likes: 10 },
        ];
        setStories(sampleStories);
    }, []);

    return (
        <div className="story-list">
            <h2>Popular Stories</h2>
            {stories.map((story) => (
                <div key={story.id} className="story-item">
                    <p><strong>Story:</strong> {story.emojiSequence}</p>
                    <p><strong>Translation:</strong> {story.translation}</p>
                    <p><strong>Likes:</strong> {story.likes}</p>
                </div>
            ))}
        </div>
    );
};

export default StoryList;
