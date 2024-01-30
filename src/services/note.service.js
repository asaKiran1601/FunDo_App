import User from '../models/user.model';
import Note from '../models/note.model';

// create a new note
export const createNote = async (userId, body) => {
  const userID = await User.findById(userId);
  if (!userID) {
    throw new Error('User Not found!');
  }

  const data = await Note.create(body);
  return data;
};

// get All notes
export const getAllNote = async () =>{
    const data = await Note.find()
    return data;
}

// get single note
export const getNote = async (id) =>{
    const data = await Note.findById(id)
    return data;
}