function sorting (info) {
  return info.sort((sortA, sortB) => (sortA.name.last  > sortB.name.last  ? 1: -1))
}

function findAccountById(accounts, id) {
  let result = accounts.find(account => account.id === id)
  return result
}

function sortAccountsByLastName(accounts) {
  let result = sorting(accounts)
  return result
}

function numberOfBorrows(account, books) {
  let counter = 0;
  books.forEach(book => {
    for (let i = 0; i<book.borrows.length; i++){
      if (account.id === book.borrows[i].id) {
      counter++;
      }
    }
  })
  return counter
}

function getBooksPossessedByAccount(account, books, authors) {
  let possessedBooks = [];

  for(let i = 0; i<books.length; i++){
    let book = books[i];
    const {id, title, genre, borrows} = book;
    for (let j = 0; j<borrows.length; j++){
      if (borrows[j].id === account.id && borrows[j].returned === false){
        for (let k = 0; k<authors.length;k++) {
          let author = authors[k]
          if (author.id === book.authorId){
            let tempBook={id, title, genre, author, borrows};
            possessedBooks.push(tempBook);
          }
        }
      }
    }
  }
  return possessedBooks
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
