import HttpStatus from 'http-status-codes';
import * as noteService from '../services/note.service';


// Create a note
export const createNote = async (req, res, next) => {

    try {
      const data = await noteService.createNote(req.user.userId, req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Notes created successfully'
      });
  
    } catch (error) {
      next(error);
    }
  };
