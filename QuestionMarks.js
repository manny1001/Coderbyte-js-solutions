function QuestionsMarks(str) {
    let lastDigit = null;
    let questionCount = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (/[0-9]/.test(char)) {
            if (lastDigit !== null) {
                const sum = parseInt(lastDigit) + parseInt(char);
                if (sum === 10) {
                    if (questionCount !== 3) {
                        return false;
                    }
                    questionCount = 0; // Reset question count for the next pair
                } else {
                    return false;
                }
            }
            lastDigit = char;
        } else if (char === "?") {
            questionCount++;
        }
    }

    // Check if the last pair had exactly 3 question marks
    return questionCount === 3;
}

// Example usage:
console.log(QuestionsMarks("arrb6???4xxbl5???eee5")); // Output: true
console.log(QuestionsMarks("arrb6???4xxbl5??eee5")); // Output: false
