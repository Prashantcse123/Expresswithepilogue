const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('show list of users');
});

router.get('/:id', (req, res) => {
  res.send('show specific user');
});

router.post('/', (req, res) => {
  res.send('create user');
});

router.put('/:id', (req, res) => {
  res.send('update user');
});

router.delete('/:id', (req, res) => {
  res.send('show specific user');
});

module.exports = router;
