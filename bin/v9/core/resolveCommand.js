import endPointsJs from "../tasks/actions/EndPointsJs/index.js";
import appJs from "../tasks/actions/appJs.js";
// resolveCommand.js
const map = {
    endPointsJs,
    appJs
};

export default function resolveCommand(cmd) {
    return map[cmd] || null;
};