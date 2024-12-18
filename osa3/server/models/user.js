const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // username oltava yksikäsitteinen
  },
  name: String,
  passwordHash: String,
  // ref to many notes, so [..] is used
  note: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'note',
    },
  ],
})
// Overrides the default toJSON behavior for Mongoose documents when toJSON() is called
userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash
  },
})

const User = mongoose.model('User', userSchema)

module.exports = User
