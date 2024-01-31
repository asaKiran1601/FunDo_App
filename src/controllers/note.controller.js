import HttpStatus from 'http-status-codes';
import * as noteService from '../services/note.service';

// Create a note
export const createNote = async (req, res, next) => {
  try {
    const data = await noteService.createNote(req.body);
    console.log(data);
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
    const data = await noteService.getAllNote(req.body.userId);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'All Notes fetched successfully'
    });
  } catch(error) {
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

// update a note
export const updateNote = async (req, res, next) => {
  try {
    const data = await noteService.updateNote(req.params._id);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Note updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

// delete a note
export const deleteNote = async (req, res, next)=>{
  try{
    await noteService.deleteNote(req.params._id);
    res.status(HttpStatus.OK).json({
      code : HttpStatus.OK,
      data : [],
      message : "Note deleted successfully"
    })
  }catch(error){
    next(error);
  }
}

// archive a note 
export const archiveNote = async (req, res, next) => {
  try {
    const data = await noteService.archiveNote(req.params._id);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Note archived successfully'
    });
  } catch (error) {
    next(error);
  }
};

// trash a note 
export const trashNote = async (req, res, next) =>{
  try{
    const data = await noteService.trashNote(req.params._id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code : HttpStatus.ACCEPTED,
      data : data,
      message : "Note successfully sent to trash!"
    })
  }
catch(error){
    next(error);
  }
};



