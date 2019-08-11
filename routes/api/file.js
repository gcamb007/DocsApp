const express = require('express');
const router = express.Router();

// Load File model
const File = require('../models/File.js/index.js');

// Get all files
router.get('/', function(req, res, next) {
  File.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

// Get single file by id
router.get('/:id', function(req, res, next) {
  File.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// Save file
router.post('/', function(req, res, next) {
  File.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// Update file
router.put('/:id', function(req, res, next) {
  File.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// Delete file
router.delete('/:id', function(req, res, next) {
  File.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
