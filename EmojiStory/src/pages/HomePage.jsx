import React, { useState, useEffect } from "react";
import EmojiPicker from "../components/EmojiPicker";
import LivePreview from "../components/LivePreview";
import StoryList from "../components/StoryList";
import axios from "axios";
import "../App.css";

const HomePage = () => {
    const [emojiSequence, setEmojiSequence] = useState([]);
    const [translation, setTranslation] = useState("");
    const [authorNickname, setAuthorNickname] = useState("");
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const response = await axios.get("/api/stories");
                setStories(response.data);
            } catch (error) {
                console.error("Error fetching stories:", error);
            }
        };
        fetchStories();
    }, []);

    const createStory = async () => {
        if (!emojiSequence || emojiSequence.length === 0 || !authorNickname) {
            alert("Please provide both emoji sequence and nickname.");
            return;
        }

        try {
            const response = await axios.post("/api/stories", {
                emojiSequence,
                authorNickname,
            });

            const newStory = response.data;

            setStories([newStory, ...stories]);
            setEmojiSequence([]);
            setTranslation(newStory.translation);
        } catch (error) {
            console.error("Failed to create story", error);
        }
    };

    return (
        <div className="home-page">
            <h1 className="title">Emoji Story Generator</h1>

            <EmojiPicker
                emojiSequence={emojiSequence}
                setEmojiSequence={setEmojiSequence}
                setTranslation={setTranslation}
            />

            <div>
                <label htmlFor="nickname">Nickname: </label>
                <input
                    type="text"
                    id="nickname"
                    value={authorNickname}
                    onChange={(e) => setAuthorNickname(e.target.value)}
                    placeholder="Enter your nickname"
                />
            </div>

            <button onClick={createStory} className="create-story-button">
                Create Story
            </button>

            <LivePreview emojiSequence={emojiSequence} translation={translation} />

            <StoryList stories={stories} />
        </div>
    );
};

export default HomePage;
