const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

router.get("/images", (req, res) => {
  const imagesFolder = path.join(__dirname, "../../images");

  fs.readdir(imagesFolder, (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error reading images directory" });
    }

    const images = files.map(file => file);
    res.render("images", { images: images });
  });
});

module.exports = router;
