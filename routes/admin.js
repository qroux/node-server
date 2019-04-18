const express = require('express');
const path = require('path');


const rootDir = require('../util/path');
const router = express.Router();


router.get('/admin/add-product', (req, res, next) => {
  console.log('ADD product middleware');
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/admin/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});


module.exports = router;
