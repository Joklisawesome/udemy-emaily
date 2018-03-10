const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
// other syntax -> mongoose has a variable called Schema, assign it to Schema
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

mongoose.model('users', userSchema);
