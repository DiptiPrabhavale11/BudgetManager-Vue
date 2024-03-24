const mongoose = require("mongoose").set("strictQuery", true);

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    spent: {
        type: Number,
        default: false
    },
    limit: {
        type: Number,
        default: false
    },
});

categorySchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.categoryId = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model("Category", categorySchema);