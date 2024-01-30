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

// get all notes
export const getAllNote = async (req, res, next) => {
  try {
    const data = await noteService.getAllNote();
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Note fetched successfully'
    });
  } catch {
    next(error);
  }
};

// get a single note
export const getNote = async (req, res, next)=>{
  try{
      const data = await noteService.getNote(req.params._id);
      res.status(HttpStatus.CREATED).json({
          code : HttpStatus.CREATED,
          data : data,
          message : "Note fetched successfully"
      });
  }catch{
      next(error)
  }
}
