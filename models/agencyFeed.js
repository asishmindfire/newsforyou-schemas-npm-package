let mongoose = require("mongoose");
let { Types } = require("mongoose");

const AgencyFeedSchema = new mongoose.Schema({
    feedUrl: {
        type: String,
        required: [true, "Please add a url for feed"],
    },
    categoryId: {
        type: Types.ObjectId,
        ref: "Category",
        required: true,
    },
    agencyId: {
        type: Types.ObjectId,
        ref: "Agency",
        required: "True"
    }
})

module.exports = mongoose.model("AgencyFeed", AgencyFeedSchema);