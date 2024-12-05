const mongoose = require("mongoose");
const moment = require("moment");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// Virtual for author's full name
AuthorSchema.virtual("name").get(function () {
  // To avoid errors in cases where an author does not have either a family name or first name
  // We want to make sure we handle the exception by returning an empty string for that case
  let fullname = "";
  if (this.first_name && this.family_name) {
    fullname = `${this.family_name} ${this.first_name}`;
  }

  return fullname;
});

// Virtual for author's URL
AuthorSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/author/${this._id}`;
});

AuthorSchema.virtual("date_of_birth_formatted").get(function () {
  return moment(this.date_of_birth).format("MMMM Do, YYYY");
});

AuthorSchema.virtual("date_of_death_formatted").get(function () {
  const today = moment(new Date()).format("MMMM Do, YYYY");
  const dateOfDeathFormatted = moment(this.date_of_death).format(
    "MMMM Do, YYYY"
  );
  if (dateOfDeathFormatted !== today) {
    return dateOfDeathFormatted;
  } else {
    return " ";
  }
});

AuthorSchema.virtual("life_span").get(function () {
  return `${this.date_of_birth_formatted} - ${this.date_of_death_formatted}`;
});
// Export model
module.exports = mongoose.model("Author", AuthorSchema);
