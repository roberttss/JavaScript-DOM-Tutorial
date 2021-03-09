const bookList = document.querySelector('#book-list')

console.log('book-list next sibiling is:',bookList.nextSibling);
console.log('book-list next element sibiling is:', bookList.nextElementSibling);

console.log('book-list previous sibiling is:',bookList.previousSibling);
console.log('book-list previous element sibiling is:', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br/>Too cool for everyone else!<br>'