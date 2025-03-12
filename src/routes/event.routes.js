const express = require ("express");
const { updateEvent, deleteEvent, createEvent, } = require("../controllers/event.controllers");
const { validateAuthUser } = require("../middlewares/validate-auth-user.middleware");
const validateId = require("../middlewares/validate-id.middleware");
const router = express.Router();


router.post('/', validateAuthUser, createEvent);
router.delete('/:id',validateId, deleteEvent);
router.patch('/:id', validateId, updateEvent);

module.exports = router;