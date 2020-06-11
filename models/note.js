var mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;


const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required:true,
            trim:true,
        },
       note : {
            type: String,
            required: true
       },
       user:{
        type:ObjectId,
        ref:"User"
       }
    },
    {timestamps: true}
)

module.exports = mongoose.model("Note", noteSchema);