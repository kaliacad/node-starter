const color = require("chalk")

const app = require("./app");
const port = 4000;

console.log('Environment var is ', process.env.NODE_ENV);

app.listen(port, () => console.log(`The server is listning on port ${color.green(port)}`));
