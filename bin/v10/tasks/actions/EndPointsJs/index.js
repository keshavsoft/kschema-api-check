// bin/v9/tasks/actions/EndPointsJs/index.js

import showUsage from "./showUsage.js";

import forShowAll from "./ShowAll/index.js";
import forInsert from "./Insert/index.js";

export default ({ action, toPath }) => {
    switch (action) {
        case undefined:
        case null:
            showUsage();

            break;

        case "ShowAll":
            forShowAll({ action: "ShowAll", toPath });

            break;

        case "Insert":
            forInsert({ action: "Insert", toPath });

            break;

        default:
            console.log(`Unknown action : ${action}`);

            break;
    };
};