// importo express
const express = require('express');
const router = express.Router();

// destrutturo le funzioni dal controller
const {
  index,
  show,
  create,
  modify, 
  update,
  destroy
} = require('../controllers/postsController');

// index
router.get('/', index);

// show
router.get('/:id', show);

// create
router.post('/', create);

// modify
router.put('/:id', modify);

// update
router.patch('/:id', update);

// destroy
router.delete('/:id', destroy);

module.exports = router;
















module.exports=router;