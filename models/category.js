let mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add a title for category"],
    },
})

module.exports = mongoose.model("Category", CategorySchema);