const mongoose = require("mongoose");

const AgencySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name for Agency"],
  },
  logo: {
    type: String,
    required: [true, "Please add a logo path for Agency"],
  },
});

module.exports = mongoose.model("Agency", AgencySchema);
