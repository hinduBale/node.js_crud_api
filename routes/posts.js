const express = require('express');
const router = express.Router();
const Post = require("../models/Post");

// Gets back all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);        
    } catch(err) {
        res.json({message: err});
    }
});

//Get a specific post
router.get('/:postId', async (req, res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({message: err});
    }
});

// To route to a specific posts page
router.get('/posts/specific', (req, res) => {
    res.send("A Specific Posts Page");
})

//Submits a post

// router.post('/', (req, res) => {
//     const post = new Post({
//         title: req.body.title,
//         description: req.body.description 
//     });

//     post.save()
//     .then(data => {
//         res.json(data);
//     })
//     .catch(err => {
//         res.json({message: err});
//     });
// });

//Implementing the above stuff(posting something), using async and await
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err){
        res.json({message: err});
    }
});

//Deleting a post
router.delete('/:postId', async(req, res) => {
    try {
        const toBeDeleted = await Post.findById(req.params.postId);
        res.json(toBeDeleted);
        const deletedPost = await Post.remove({ _id: req.params.postId}); 
        res.json(deletedPost);
    } catch(err) {
        res.json({message: err});
    }
});

//Updating a post
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({_id: req.params.postId}, {$set: {
            title: req.body.title
        }});
        res.json(updatedPost);
    }catch(err) {
        res.json({message: err});
    }
});


module.exports = router;