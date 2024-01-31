import { Schema, model } from 'mongoose';


// define a schema for note
const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    discription: {
      type: String,
      required: true
    },
    color: {
      type: String
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },
    isArchived: {
      type: Boolean,
      default: false
    },
    isTrash: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);


// export schema based on schema
export default model('Note', noteSchema);
