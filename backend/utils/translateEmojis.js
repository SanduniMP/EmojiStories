export function translateEmojis(emojiSequence) {
    const rules = {
        "👩‍💻💻": "A developer working on a computer.",
        "🐶🏃": "A dog running.",
        "🍕🍔": "Someone enjoying fast food."
    };

    const sequenceString = emojiSequence.join("");
    return rules[sequenceString] || "An enigmatic emoji story!";
}
