var routes = require('express').Router(); //bean
var db = require('../dao/db');  
var bookDao = require('../dao/bookDAO');
var promise = require('promise');
/*
*   TODO: 
*/

//get method
//to get an end-point
//@param (url, request * response)
routes.get('/book',function(req,res){
    bookDao.getAllBooks()
    .then( (result) =>
    {
        res.setHeader('Content-Type', 'application/json');
        res.send(result);
    })
    .catch( (err) =>
    {
        console.log(err);
        res.send(err);
    });
});

routes.post('/book', function(req, res){
  var book = req.body;
  bookDao.addBook(book)
  .then( (result) =>
  {
      res.status(201);
      res.send("Add book success!");
  })
  .catch( (err) =>
  {
      res.status(400);
      res.status("Add book Failed!");
  });
});

routes.put('/book', function(req, res)
{
    var book = req.body;
    bookDao.updateBook(book)
    .then( (result) =>
    {
        res.status(201);
        res.send("Book Deleted!");
    })
    .catch( (err) =>
    {
        res.status(400);
        res.send("Book Deletion Failed");
    }
    );
});

routes.delete('/book/:id', function(req, res){
  var book = req.body;
  bookDao.deleteBook(book)
  .then( (result) => 
  {
    res.send("Book deleted!");
  })
  .catch( (err) => {
      res.status(400);
      res.send("Book delete failed!");
  });
});

module.exports = routes;
