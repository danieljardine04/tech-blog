const router = require('express').Router();
const { Post } = require('../models');


router.get('/', (req, res) => {
  console.log("You made it here! I am going to find the post");
  Post.findAll({ 
  })
  .then(dbPostData => {
    console.log("Got the post back!" );
    const posts = dbPostData.map(data => data.get({plain: true}));
    console.log("rendering", posts);
    

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
    console.log("This is actually happening",err);
    res.status(500).json(err);
  })
})


router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      

      res.render('single-post', {
        dbPostData,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
})

module.exports = router;