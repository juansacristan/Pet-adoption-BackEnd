const express = require ("express");
const { updateEvent, deleteEvent, createEvent, getEvents, } = require("../controllers/event.controllers");
const router = express.Router();


router.post('/', createEvent);
router.delete('/:id', deleteEvent);
router.patch('/:id', updateEvent);
router.get("/", getEvents)


module.exports = router;