const server = require("./api/server.js");

// enable dyanmic ports for hosting providers

const port = process.env.PORT || 5000;
server.listen(port, () => console.log("server on port 5k"));
