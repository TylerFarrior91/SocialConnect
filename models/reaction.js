const { Schema, Types } = require('mongoose');

const reactionsSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionbody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
      createdAt: { type: Date, required: true, default: Date.now, get: ts => date_format(ts) },
    },
  {
    toJSON: {
      getters: true,
    },
    id: false,
    _id : false,
  }
);

module.exports = reactionsSchema;
