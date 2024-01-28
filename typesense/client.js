const Typesense = require("typesense");
// http://170.64.222.194:8108/
const client = new Typesense.Client({
  nodes: [
    {
      host: "170.64.222.194",
      port: "8108", // For Typesense Cloud use 443
      protocol: "http",
    },
  ],
  apiKey: "Af2wdDZPu3rWXbS4NwxsCWZT2h4aFa2BW8gX0aT2NdelUTYC",
  connectionTimeoutSeconds: 5,
});


module.exports = client;