const express = require("express");

const router = express.Router();

// middleware

// endpoints where the url begins with /products
router.get("/", (req, res) => {
  res.send("GET /products endpoint");
});

router.get("/:id", (req, res) => {
  res.send(`GET /products/${req.params.id}`);
});

module.exports = router;
