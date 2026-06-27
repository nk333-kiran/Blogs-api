const BlogPost = require("../models/BlogPost");


// CREATE POST
exports.createPost = async (req, res) => {
    try {
        const post = await BlogPost.create(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// GET ALL POSTS
exports.getPosts = async (req, res) => {
    try {
        let {
            limit = 5,
            skip = 0,
            tag,
            author,
            startDate,
            endDate,
            sort = "newest"
        } = req.query;

        limit = Number(limit);
        skip = Number(skip);

        let filter = {};

        if (tag) {
            filter.tags = tag;
        }

        if (author) {
            filter.author = author;
        }

        if (startDate || endDate) {
            filter.createdAt = {};

            if (startDate) {
                filter.createdAt.$gte = new Date(startDate);
            }

            if (endDate) {
                filter.createdAt.$lte = new Date(endDate);
            }
        }

        let sortOption = {};

        if (sort === "oldest") {
            sortOption.createdAt = 1;
        } else {
            sortOption.createdAt = -1;
        }

        const posts = await BlogPost.find(filter)
            .sort(sortOption)
            .skip(skip)
            .limit(limit);

        const total = await BlogPost.countDocuments(filter);

        res.json({
            total,
            limit,
            skip,
            data: posts
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// GET SINGLE POST
exports.getPostById = async (req, res) => {
    try {
        const post = await BlogPost.findById(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// UPDATE POST
exports.updatePost = async (req, res) => {
    try {
        const post = await BlogPost.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.json(post);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// DELETE POST
exports.deletePost = async (req, res) => {
    try {
        const post = await BlogPost.findByIdAndDelete(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.json({
            message: "Post deleted successfully"
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
