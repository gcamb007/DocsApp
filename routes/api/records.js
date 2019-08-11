const express = require("express");
const router = express.Router();
const Record = require("../../models/Record");

// Get all records
router.get("/", function(req, res, next) {
  Record.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

// Get single record by id
router.get("/:id", function(req, res, next) {
  Record.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// Save a record
router.post("/", function(req, res, next) {
  Record.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// Update a record
router.put("/:id", function(req, res, next) {
  Record.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// Delete a record
router.delete("/:id", function(req, res, next) {
  Record.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
