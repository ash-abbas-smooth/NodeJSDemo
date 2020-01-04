var routes = require('express').Router();
var db = require('../dao/db');
var authorDao = require('../dao/authorDAO');

routes.get('/author',function(req,res){
    authorDao.getAllAuthors(function(error, result){
      if(error) throw error;
      res.setHeader('Content-Type', 'application/json');
      res.send(result);
    });
});

/*
routes.get('/author',function(req,res){
    authorDao.getAllAuthors()
    });
});
*/

routes.post('/author', (req, res) =>
{
  var author = req.body;
  authorDao.addAuthor(author, (err, res) =>
  {
    if(err)
    {
      res.status(400);
      res.send('Add Author Failed!');
    }
    res.status(201);
    res.send('Add Author Succesful!');
  });
});

routes.put('/author', (req, res) =>
{
  var author = req.body;
  authorDao.updateAuthor(author, (err,res) =>
  {
    if(err) { res.status(400); res.send('Update Author Failed!');}
    res.status(201); res.send('Update Author Successful!');
  });
});

module.exports = routes;
