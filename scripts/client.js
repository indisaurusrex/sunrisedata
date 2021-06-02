const { apiRoot, projectKey } = require("../lib/client.js");
const { log } = require("../helpers/logger.js");

module.exports.getProject = () =>
  apiRoot.withProjectKey({ projectKey }).get().execute();

// getProject().then(log).catch(log);
