function idFinder(list, id){
  let result = list.find(item => item.id === id);
  return result;
}


function findAuthorById(authors, id) {
  let result = idFinder(authors, id);
  return result;
}

function findBookById(books, id) {
  let result = idFinder(books, id);
  return result;
}

function partitionBooksByBorrowedStatus(books) {
  let final = [];
  let loaned = books.filter(book => book.borrows[0].returned === false);
  let returned = books.filter(book => book.borrows[0].returned === true);
  final.push(loaned);
  final.push(returned);
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
