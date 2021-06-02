const { apiRoot, projectKey } = require("../lib/client.js");
const { log } = require("../helpers/logger.js");

getCustomerById = (ID) =>
    apiRoot
        .withProjectKey({ projectKey })
        .customers()
        .withId({ ID })
        .get()
        .execute();

getCustomerById('cdd293db-f9a3-4fcd-876e-7cc1655aee2d').then(log).catch(log);
