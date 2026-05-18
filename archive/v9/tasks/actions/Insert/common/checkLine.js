const startFunc = ({ inContent, inToCheckLine }) => {
    const toCheckLine = inToCheckLine;

    const lines = inContent.split("\n");

    const lineIndex = lines.findIndex(line =>
        line.includes(toCheckLine)
    );

    if (lineIndex === -1) {
        return {
            found: false
        };
    };

    return {
        found: true,
        line: lineIndex + 1
    };
};

export default startFunc;