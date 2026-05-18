import readFile from "../common/readFile.js";
import checkDuplicate from "./checkDuplicate.js";

const startFunc = ({ appJsPath, showLog = false, inEndpoint, inAppOrRouter }) => {
    const content = readFile(appJsPath);

    const fromCheckDuplicate = checkDuplicate({
        inContent: content,
        inEndpoint, inAppOrRouter
    });

    return fromCheckDuplicate;
};

export default startFunc;