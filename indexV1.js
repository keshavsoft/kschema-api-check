import getLatestVersion from "./bin/core/getLatestVersion.js";

const v = getLatestVersion();

const loadEndPointsJs = async () => {
    return (await import(`./bin/${v}/tasks/actions/EndPointsJs/index.js`)).default;
};

export default loadEndPointsJs;