const express = require('express');
const router = express.Router();
const apply = require('./routes/apply')
const balancesheet = require('./routes/balancesheet')
const decisionEngine = require('./routes/decisionengine')

router.use('/apply', apply);
router.use('/balancesheet', balancesheet);
router.use('/decisionengine', decisionEngine);

module.exports = router;
