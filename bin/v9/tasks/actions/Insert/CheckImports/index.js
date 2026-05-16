import readFile from "../common/readFile.js";
import checkDuplicate from "./checkDuplicate.js";

const startFunc = ({ appJsPath, showLog = false, inFuncName }) => {
    const content = readFile(appJsPath);

    const fromCheckDuplicate = checkDuplicate({ inContent: content, inFuncName });

    return fromCheckDuplicate;
};

export default startFunc;