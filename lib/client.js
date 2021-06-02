const {
    createAuthMiddlewareForClientCredentialsFlow,
    createAuthMiddlewareForPasswordFlow,
} = require("@commercetools/sdk-middleware-auth");
const { createHttpMiddleware } = require("@commercetools/sdk-middleware-http");
const { createClient } = require("@commercetools/sdk-client");
const {
    createApiBuilderFromCtpClient,
} = require("@commercetools/typescript-sdk");

const {
    createApiBuilderFromCtpClient: createApiBuilderFromCtpClientOnlyForImports,
} = require("@commercetools/importapi-sdk");
require("dotenv").config();

const fetch = require("node-fetch");

const projectKey = process.env.CTP_PROJECT_KEY;

const getClient = () => {
    const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
        host: process.env.CTP_AUTH_URL,
        projectKey,
        credentials: {
        clientId: process.env.CTP_CLIENT_ID,
        clientSecret: process.env.CTP_CLIENT_SECRET,
        },
        fetch,
    });

    const httpMiddleware = createHttpMiddleware({
        host: process.env.CTP_API_URL,
        fetch,
    });

    const ctpClient = createClient({
        middlewares: [authMiddleware, httpMiddleware],
    });
    return ctpClient;
};


module.exports.apiRoot = createApiBuilderFromCtpClient(getClient());

module.exports.projectKey = projectKey;