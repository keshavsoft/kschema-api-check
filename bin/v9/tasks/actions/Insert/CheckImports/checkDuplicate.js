import checkLine from "../common/checkLine.js";

const checkDuplicate = ({ inContent, inFuncName }) => {
    const toCheckLine = `import { ${inFuncName} } from`;

    return checkLine({ inContent, inToCheckLine: toCheckLine });
};

export default checkDuplicate;