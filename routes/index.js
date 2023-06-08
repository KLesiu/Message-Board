var express = require('express');
var router = express.Router();

const messages = [

 
];


/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: "Message Board", messages: messages });
});
router.get('/new',function(req,res,next){
  res.render("form",{})
})
router.post('/new',function(req,res,next){
  const user = req.body.user
  const msg = req.body.msg
  const date = new Date()
  messages.push({text: msg, user: user, added: date})
  res.redirect('/')
})

module.exports = router;
