const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const config = require("config");
require("dotenv/config");
const path = require("path");

//importing the routes
const ProductRoute = require("./routes/products");
const BillFormRoute = require("./routes/billForm");
const RegisterRoute = require("./routes/register");
const authRoute = require("./routes/auth");
//using the routes
app.use("/products", ProductRoute);
app.use("/checkout", BillFormRoute);
app.use("/register", RegisterRoute);
app.use("/register/auth", authRoute);

// connecting the databse-------------------------------------------------------------------------------------------------
mongoose.connect(
  process.env.MONGODB_PASSWORD,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log(`database connected`)
);
//-------------------------------------------------------------------------------------------------------------------------

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", index.html))
  );
}

const port = process.env.PORT || 5000;
app.listen(port, console.log(`server started on port ${port}`));
