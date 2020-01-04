var db = require('./db');

exports.getAllBooks = function()
{
    return new Promise( (resolve, reject) => 
    {
        db.query('select * from tbl_book', 
        (err, result) => {return err ? reject(err) : resolve(result)});
    });
}

exports.addBook = function(book)
{
    return new Promise( (resolve, reject) => 
    {
        db.query('insert into tbl_book(title, author) values(?,?)', 
        [book.title, book.author],
        (err, result) => {return err ? reject(err) : resolve(result)});
    });
}

exports.deleteBook = function(book)
{
    return new Promise( (resolve, reject) => 
    {
        db.query('delete from tbl_book where bookId = ?', [book.id], 
        (err, result) => {return err ? reject(err) : resolve(result)});
    });
}

exports.updateBook = function(book)
{
    return new Promise( (resolve, reject) => 
    {
        db.query('insert into tbl_book(title,author) values (?,?) where bookId = ?',
        [book.title, book.author, book.id],
        (err, result) => {return err ? reject(err) : resolve(result)});
    });
}
