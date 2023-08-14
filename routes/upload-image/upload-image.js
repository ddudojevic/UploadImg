const express = require("express");
const upload = require("../../middlewares/upload-image");
const multer = require("multer");

const router = express.Router();

router.get("/upload-image", (req, res) => {
  res.render("upload");
});

router.post("/upload-image", upload.single("image"), (req, res) => {
  res.status(200).send("Image uploaded!");
});


module.exports = router;
