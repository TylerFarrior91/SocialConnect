const { Schema, model } = require('mongoose');


const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdat: { type: Date, required: true, default: Date.now, get: ts => date_format(ts) },
    reactions: [reactionsSchema],


  },

  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
ThoughtSchema.virtual("reactioncounts").get(function () { return this.reactions.length })
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
