const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    trim: true,
    minlength: [3, 'Username must be at least 3 characters'],
    maxlength: [30, 'Username cannot exceed 30 characters']
  },
  fullName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  mobileNo: {
    type: Number,
    required:true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters'],
      // Ensures password is not returned in queries by default
  },
  // College Identity
  college: {
    type: String,
    default: 'PICT',
  },
  branch: {
    type: String,
  },
  year: {
    type: Number, // e.g., 1 (FE), 2 (SE), etc.
  },
  profilePicUrl: {
    type: String,
  },
  bio: {
    type: String,
    maxlength: 200,
  },

  // Platform Stats
  reputation: {
    type: Number,
    default: 0,
  },
  pointsEarned: {
    type: Number,
    default: 0,
  },
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
  }],
  answers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Answer',
  }],
  votes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vote',
  }],

  // For moderation & verification
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  collegeIdCardUrl: {
    type: String,
  },
},{timestamps:true});

const User = mongoose.model('User', userSchema);
module.exports = User;
