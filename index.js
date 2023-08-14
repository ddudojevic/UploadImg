const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "images")));

const upload = require("./routes/upload-image/upload-image");
const showImages = require("./routes/upload-image/show-images")

app.use(upload);
app.use(showImages);

const start = () => {
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log("Listening on port 5000"));
};

start();
