const express = require('express');
const router = express.Router();
const { getAllcontact, createContact, updateContact, getOneContact, deletContact } = require('../controllers/contactControllers')

router.route('/').get(getAllcontact)

router.route('/').post(createContact)

router.route('/:id').put(updateContact)

router.route('/:id').delete(deletContact)
router.route('/:id').get(getOneContact)

module.exports = router;