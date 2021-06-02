const { apiRoot, projectKey } = require("../lib/client.js");
const { log } = require("../helpers/logger.js");

getProject = () =>
  apiRoot.withProjectKey({ projectKey }).get().execute();

getProject().then(log).catch(log);