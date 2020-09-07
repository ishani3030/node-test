const express = require('express');
const router = express.Router();

const users = require('./users');
const subscribers = require('./subscriber');

const {validateCreateUser, validateSubstituteReferenceData} = require('../middlewares/validator');

router.post('/user', validateCreateUser, users.create);
router.post('/subscriber/substituteReferenceData', validateSubstituteReferenceData, subscribers.substituteReferenceData);

module.exports = router;