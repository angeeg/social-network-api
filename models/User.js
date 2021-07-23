const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
{
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: "/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/"
  },
  thoughts: [
      {
          type: Schema.Types.ObjectId,
          ref:'Thought'
      }
  ],
  friends: []
},
{
    toJSON: {
      virtuals: true,
    },
    id: false
  }
);

// get total count of thoughts and reactions on retrieval
UserSchema.virtual('thoughtCount').get(function() {
    return this.thoughts.length;
  });

// create the User model using the PizzaSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;