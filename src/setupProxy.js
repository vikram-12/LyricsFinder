// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // Match any request starting with /api
    createProxyMiddleware({
      target: "http://api.musixmatch.com", // Proxy to the Musixmatch API
      changeOrigin: true, // Adjust the request to appear as if it's from the target API
      pathRewrite: {
        "^/api": "", // Remove the /api prefix when forwarding the request
      },
      onProxyReq: (proxyReq, req, res) => {
        console.log("Proxying request:", req.url); // Logs the incoming request URL
      },
    })
  );
};
