function findAuthorById(authors, id) {
  let result = authors.find(author => author.id === id)
  return result
}

function findBookById(books, id) {
  let result = books.find(book => book.id === id)
  return result;
}

function partitionBooksByBorrowedStatus(books) {
  let final = [];
  let loaned =[];
  let returned = [];
  books.forEach(book => {
    if (book.borrows[0].returned === true) {
      returned.push(book)
    } else {
      loaned.push(book);
    }
  })
  final.push(loaned)
  final.push(returned)
  return final
}

function getBorrowersForBook(book, accounts) {
  let borrowers = [];
  accounts.forEach(account=>{
    book.borrows.forEach(transaction=>{
      if(transaction.id === account.id) {
        let accountObject = {...account};
        accountObject.returned = transaction.returned;
        borrowers.push(accountObject);
      }
    })
  })
  return borrowers.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
