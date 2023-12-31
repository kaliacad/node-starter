const color = require("chalk");
const app = require("./app");
const port = 4000;

require('./db');

console.log("Environment var is ", process.env.MONGO_HOST,process.env.MONGO_USER_NAME, process.env.MONGO_PASSWORD );

app.listen(port, () => {
  
  console.log(`The server is listning on port ${color.green(port)}`);
});
