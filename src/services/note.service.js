import User from '../models/user.model';
import Note from '../models/note.model';

// create a new note
export const createNote = async (body) => {
    console.log("service",body);
  const data = await Note.create(body);
  return data;
};

// get All notes
export const getAllNote = async (userId) =>{
    const data = await Note.find({userId : userId})
    return data;
}

// get single note
export const getNote = async (id) =>{
    const data = await Note.findById(id)
    return data;
}

//update note
export const updateNote = async (id, body) => {
    const data = await Note.findByIdAndUpdate(
        {
        _id:id
        },body,
        {
            new:true
        }
    );

    if (!data) {
        throw new Error('Note not found or update failed');
    }
    return data;
  };

// delete a note
export const deleteNote = async(id) => {
    await Note.findByIdAndDelete(id)
    return '';
}

// archive a Note
export const archiveNote = async (id) => {
    const data = await Note.findById(id);
    
    // check the note
    if (!data) {
        throw new Error('Note not found');
    }
    data.isArchived = !data.isArchived;
    
    const updatedData = await data.save();
    console.log("archive res after toggle", updatedData);
    return updatedData;
  };


// trash a note 
export const trashNote = async (id) => {
    const data = await Note.findById(id);
    
    // check the note
    if (!data ) {
        throw new Error('Note not found');
    }

    data.isTrash = !data.isTrash;

    const updatedData = await data.save();
    console.log('trash res after toggle',updatedData)
    return updatedData;
};

