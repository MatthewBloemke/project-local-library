function totalBooksCount(books) {
  return books.length
}

function totalAccountsCount(accounts) {
  return accounts.length
}

function booksBorrowedCount(books) {
  let counter = 0;
  books.forEach(book=> {
    if (book.borrows[0].returned === false){
      counter++;
    }
  })
  return counter
}

function getMostCommonGenres(books) {
  let result = [];
  let tempList = [];
  books.reduce((acc, book) =>{
    if (tempList[book.genre] === undefined){
      tempList[book.genre] = 1;
    } else {
      tempList[book.genre]++;
    }
  })
  let finalName = Object.keys(tempList)
  let finalCount = Object.values(tempList)
  for(let i = 0; i<finalName.length;i++){
    const name = finalName[i]
    const count=finalCount[i]  
    result.push({name,count})
  }
 return result.slice(0,5)
}

function getMostPopularBooks(books) {
  result = [];
  books.forEach(book => {
    result.push({name: book.title, count: book.borrows.length})
  })
  result.sort((borrowA,borrowB) => borrowA.count < borrowB.count ? 1: -1)
  return result.slice(0,5)
}

function getMostPopularAuthors(books, authors) {
  let result = []
  let count = 0;
  authors.forEach(author => {
    count = 0;
    
    let authorName = `${author.name.first} ${author.name.last}`
    books.forEach(book => {
      if (book.authorId === author.id) {
        count += book.borrows.length
      }
    })
    result.push({name: authorName, count})
  })
  result.sort((countA,countB) => countA.count < countB.count ? 1: -1)
  return result.slice(0,5)
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
