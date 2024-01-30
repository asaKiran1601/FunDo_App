import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    title: {
      type: String,
      require: true
    },
    discription: {
      type: String,
      require:true
    },
    color: {
      type: String
    },
    isArchived:{
        type : Boolean
    },
    isDeleted:{
        type : Boolean
    }
  },
  {
    timestamps: true
  }
);


export default model('Note', userSchema);
