const express = require ("express");
const { updateEvent, deleteEvent, createEvent, getEvents, getEventById, } = require("../controllers/event.controllers");
const { validateAuthUser } = require("../middlewares/validate-auth-user.middleware");
const validateId = require("../middlewares/validate-id.middleware");
const router = express.Router();


router.post('/', validateAuthUser, createEvent);
router.delete('/:id', validateAuthUser, deleteEvent);
router.patch('/:id', validateAuthUser, updateEvent);
router.get("/", getEvents);
router.get('/:id', validateId, validateAuthUser, getEventById);


module.exports = router;