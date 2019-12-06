const notesController = require('../controller/notesController');
const verifyToken = require('../helpers/token');
const express = require('express');
const notesRouter = express.Router();
notesRouter.post('/addNote', verifyToken.userVerify, notesController.addNote);
notesRouter.get('/getNotes', verifyToken.userVerify, notesController.getNotes);
notesRouter.put('/deleteNote', notesController.deleteNote);
notesRouter.put('/editNote', notesController.editNote);
module.exports = notesRouter;