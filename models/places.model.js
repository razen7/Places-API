const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    }
},
    { timestamps: true },
);

// Compiling our schema into a Model
const PlaceModel = mongoose.model("Place", placeSchema);
module.exports = PlaceModel;
