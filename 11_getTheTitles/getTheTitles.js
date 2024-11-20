const getTheTitles = function(array) {
    let titles=[];
    array.forEach((object) => {
        titles.push(object.title);
        
    });
    return titles;

};
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
  console.log(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;
