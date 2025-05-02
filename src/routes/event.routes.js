const express = require ("express");
const router = express.Router();

const { updateEvent, deleteEvent, createEvent, getEvent, getEventById, } = require("../controllers/event.controllers");
const { validateAuthUser } = require("../middlewares/validate-auth-user.middleware");
const validateId = require("../middlewares/validate-id.middleware");

// http://localhost:3000/api/event

router.get("/", getEvent);
router.post('/', validateAuthUser, createEvent);
router.get('/:id', validateId, getEventById);
router.delete('/:id', validateId, validateAuthUser, deleteEvent);
router.patch('/:id', validateId, validateAuthUser, updateEvent);


module.exports = router;