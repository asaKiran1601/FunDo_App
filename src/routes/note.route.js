import express from 'express';
import * as noteController from '../controllers/note.controller'
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to create a new note
router.post('', userAuth, noteController.createNote);

// route to get allNotes
router.get('', userAuth, noteController.getAllNote);

// route to get the note
router.get('/:_id', userAuth, noteController.getNote);

// route to update note
router.put('/:_id', userAuth, noteController.updateNote);

// route to delete note
router.delete('/:_id', userAuth, noteController.deleteNote)

// Archive a note 
router.put('/:_id/archive',userAuth, noteController.archiveNote);



export default router;
