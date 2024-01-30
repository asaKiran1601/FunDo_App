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
