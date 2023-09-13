const express = require("express");
require("../src/db/conn");

const app = express();

const mainRouter = require("../src/routes/mensRouter.js")
const port = process.env.PORT || 4000;

app.use(express.json());

app.use(mainRouter)


app.listen(port, () => {
  console.log(`Connetion is stablised ${port}`);
});
