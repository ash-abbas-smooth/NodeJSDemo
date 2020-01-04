var db = require('./db');

exports.getAllAuthors = function(cb){
    db.query('select * from tbl_author', function(err, result) {
        cb(err, result);
      });
};

/*
  exports.getAllAuthors = function()
  {
    return new Promises( (resolve, reject) => 
      db.query('select * from tbl_author', 
      (err, result) => return err ? reject(err) : resolve(result););
    );
  };
*/

exports.addAuthor = function(author, cb)
{
    db.beginTransaction(function(err) 
    {
      if(err) cb(err,null);
      
      db.query('insert into tbl_author (name) value (?)', [author.name], function(err,res)
      {
          if(err)
              db.rollback( (err,res) => cb(err,res));
          
          db.commit((err,res)=> cb(err,res));
      });
    });
}

exports.updateAuthor = function(author, cb)
{
  db.beginTransaction( (err) =>
  {
    if(err) cb(err,null);
    
    db.query('insert into tbl_author (name) value (?) where \'authorId\' = (?)', [author.name, author.id],
    (err, result) => 
    {
        if(err)
        {
          db.rollback(function(err, res)
          {
            cb(err, res);
          });
        }
        db.commit( (err,res) => {cb(err,res);});
    });
  });
}

exports.removeAuthor = function(author, cb)
{
  db.beginTransaction( (err) => 
  {
    if(err) cb(err,null);
    db.query('delete from tbl_author (authorId) value (?)', [author.id], (err,res) => 
      {
          if(err)
            db.rollback( (err,res) => cb(err,res));
          db.commit( (err, res) => cb(err,res));
      }
    );
  });
}