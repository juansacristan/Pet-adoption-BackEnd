const express = require ("express");
const { updateEvent, deleteEvent, createEvent, } = require("../controllers/event.controllers");
const router = express.Router();


router.post('/', createEvent);
router.delete('/:id', deleteEvent);
router.patch('/:id', updateEvent);

module.exports = router;