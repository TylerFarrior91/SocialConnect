const { Schema, model } = require('mongoose');


// Schema to create Student model
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    
    thoughts: [{type: Schema.Types.ObjectId, ref:"Thought"}],
    friends: [{type: Schema.Types.ObjectId, ref:"User"}],
  
},

  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const User = model('User', UserSchema);

module.exports = User;
