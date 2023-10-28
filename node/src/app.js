const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const widgetRouter = require("./routers/widgets");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", widgetRouter);
app.listen(process.env.port || 4000);

console.log("Running at Port 4000");

pool.connect((err, client) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }

  const createTableQuery = `
      CREATE TABLE IF NOT EXISTS widget_settings (
        id int,
        settings jsonb
      );
    `;

  client.query(createTableQuery);
});
