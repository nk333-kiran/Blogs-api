const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        body: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        tags: {
            type: [String],
            default: []
        }
    },
    {
        timestamps: true
    }
);

// Index for filtering + sorting performance
blogSchema.index({ author: 1, createdAt: -1 });

module.exports = mongoose.model("BlogPost", blogSchema);
