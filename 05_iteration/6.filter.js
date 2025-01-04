// recap of for_each
const newArray = [1,2,3,4,5,6,7,8,9]

const newArr = []

newArray.forEach( (item) => {
  if (item > 4) {
   newArr.push(item)
   
  }    
 
})
// console.log(newArr);

// filter
let myArray = [1,2,3,4,5,6,7,8,9]

const result = myArray.filter((item) => item > 4)
//  console.log(result);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

 let newBook = books.filter( (book) => book.genre === "History")
// console.log(newBook);

newBook = books.filter( (bk ) => (bk.genre === "History" && bk.publish >= "1999"))
console.log(newBook);
