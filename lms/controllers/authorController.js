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
  console.log(author);
  authorDao.addAuthor(author, (err, result) =>
  {
    if(err)
    {
      res.status(400);
      res.send('Add Author Failed!');
    }
    else{
      res.status(201);
      res.send('Add Author Succesful!');
    }
  });
});

routes.put('/author', (req, res) =>
{
  var author = req.body;
  authorDao.updateAuthor(author, (err,result) =>
  {
    if(err) { res.status(400); res.send('Update Author Failed!');}
    else{res.status(201); res.send('Update Author Successful!');}
  });
});

routes.delete('/author:id', (req, res) =>
{
  var author = req.body;
  authorDao.removeAuthor(author, (err, result) =>
  {
    if(err) { res.status(400); res.send('Delete author failed!');}
    else{res.send("Delete successful!");}
  });
});

module.exports = routes;
