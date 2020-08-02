const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./config/db/db");

// settings

const app = express();
app.use(morgan("dev"));

app.use(cors());
app.set("port", process.env.PORT || 5010);

//middlewares
app.use(bodyparser.json());
app.use("*", cors());

//Routes

app.use("/api/clientes", require("./routes/clientes"));
app.use("/api/servicios", require("./routes/servicios"));
app.use("/api/pagos", require("./routes/pagos"));





// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//Conecting DB

db.pchomeSequelize
  .authenticate()
  .then(() => console.log("Database PcHome conected..."))
  .catch((err) => console.log("error" + err));

// server escuchando

app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
