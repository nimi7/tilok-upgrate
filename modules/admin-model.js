const mongoose = require('mongoose');

const schema = mongoose.Schema;

const comments_HistorySchema = new schema({
    text: { type: String,},
    date: { type: Date, default: Date.now },
    tourGuideID: { type: schema.Types.ObjectId, ref: "guides" }

});


const adminSchema = new schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: Number, required: true },
    comments_History: [comments_HistorySchema],

})

const admin = new mongoose.model("admins", adminSchema);
module.exports = admin;