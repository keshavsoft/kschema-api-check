import checkLine from "../common/checkLine.js";

const checkDuplicate = ({ inContent, inEndpoint, inAppOrRouter }) => {
    const localEndpoint = inEndpoint;
    const toCheckLine = `${inAppOrRouter}.get('/${localEndpoint}'`;

    return checkLine({ inContent, inToCheckLine: toCheckLine });
};

export default checkDuplicate;