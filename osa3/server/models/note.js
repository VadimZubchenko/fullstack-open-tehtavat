const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    minlength: 5,
    required: true,
  },
  important: Boolean,
  // ref to just one user, so [..] don't used
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'user',
  },
})
// transform returned DB JSON to cleaner format by deleting '_id' and '_v' (version of doc, autom-lly added by Mongoose )
noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Note', noteSchema)
