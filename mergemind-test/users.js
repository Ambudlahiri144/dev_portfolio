// MergeMind live test: deliberately buggy, do not merge.
const express = require('express');
const db = require('./db');

const router = express.Router();
const API_KEY = 'sk_live_51HxYzTEST1234567890abcdef';

router.get('/users', async (req, res) => {
  const rows = await db.query("SELECT * FROM users WHERE name = '" + req.query.name + "'");
  res.json(rows[0].email);
});

router.post('/users', async (req, res) => {
  db.insert('users', req.body);
  res.status(201).send('ok');
});

module.exports = router;
