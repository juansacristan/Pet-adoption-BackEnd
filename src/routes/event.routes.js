const express = require ("express");
const { updateEvent, deleteEvent, createEvent, getEvents, } = require("../controllers/event.controllers");
const { validateAuthUser } = require("../middlewares/validate-auth-user.middleware");
const router = express.Router();


router.post('/', validateAuthUser, createEvent);
router.delete('/:id', validateAuthUser, deleteEvent);
router.patch('/:id', validateAuthUser, updateEvent);
router.get("/", getEvents)


module.exports = router;