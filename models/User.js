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
  },
  thoughts: [
      {
          type: Schema.Types.ObjectId,
          ref:'Thought'
      }
  ],
  friends: []
}
);


// create the User model using the PizzaSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;