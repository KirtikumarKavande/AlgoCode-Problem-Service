const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");
const errorHandler = require("./utils/errorHandler");
const connectToDB = require("./config/db.config");
const cors =require('cors')
const app = express();
app.use(cors({origin:["http://localhost:8080","http://localhost:5173","https://algocode-phi.vercel.app"]}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// If any request comes and route starts with /api, we map it to apiRouter
app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
  return res.json({ message: "Problem Service is alive" });
});
app.use(errorHandler);


app.listen(PORT, async () => {
  console.log(`Server started at PORT: ${PORT}`);
  await connectToDB();
  console.log("successfully connected to DB");
});
