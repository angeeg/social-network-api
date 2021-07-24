const { Schema, model } = require("mongoose");

const FriendSchema = new Schema (
    {
        friendId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        }
    },
    {
        toJSON: {
          getters: true
        }
      }
)

// create the Friend model using the UserSchema
const Friend = model("Friend", FriendSchema);

// export the Friend model
module.exports = Friend;