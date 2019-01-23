const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Post = require('./model/post');

mongoose.connect('mongodb://localhost/blogDB1', {useNewUrlParser: true});

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/posts', async (req, res) => {
    if (req.query.limit === undefined) {
        const posts = await Post.find();
        res.json(posts);
    } else {
        await Post.paginate({}, {limit: +req.query.limit, page: +req.query.page}, (err, posts) => {
            res.json(posts.docs);
        })
    }
});

app.get('/posts/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.json(post);
});

app.post('/posts', async (req, res) => {
    const posts = await Post.find();
    let maxPostId = 1;
    posts.forEach((post) => {
        if (+post.postId > maxPostId) {
            maxPostId = +post.postId;
        }
    });
    let post = new Post(req.body);
    post.postId = maxPostId + 1;
    post = await post.save();
    res.json(post);
});

app.delete('/posts', async (req, res) => {
    let post = new Post(req.body);
    await Post.deleteOne({postId: post.postId});
    let posts = await Post.find();
    let i = 1;
    posts = posts.map(async (post) => {
        await Post.findOneAndUpdate({postId: post.postId}, {postId: i++}, {new: true});
    });
    res.json(posts);
});

app.listen(3003, () => {
    console.log('Server started!');
});


