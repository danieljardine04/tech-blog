const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  console.log("The req session is ", req.session);
  Post.findAll({
    where: {
      user_id: req.session.user_id
    },
    
  })
  .then(dbPost => {
    console.log("string test");
    const posts = dbPost.map(post => post.get({plain: true}));
    res.render('dashboard', { posts, loggedIn: true });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
})

router.get('/edit/:id', withAuth,  (req, res) => {
  Post.findByPk(req.params.id, {
  
  })
    .then(dbPost => {
      if (dbPost) {
        const post = dbPost.get({plain: true});
        
        res.render('edit-post', {
          post,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
