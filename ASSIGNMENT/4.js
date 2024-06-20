let books=[
    {title:"The road",authorname:"miki",p_year:2012},
    {title:"The goat",authorname:"riki",p_year:2025},
    {title:"The bull",authorname:"bhim",p_year:2028},
    {title:"The lion",authorname:"juki",p_year:2015},
    {title:"The jion",authorname:"kuki",p_year:2009}
];
function capitalizeName(name) {
    return name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
 function filter(books){
    return books.filter(books=>books.p_year>=2010);
 }
 function capitalize(books) {
    return books.map(book => ({
      ...book,
      authorname: capitalizeName(book.authorname)
    }));
  }
function filterandcapital(books){
    const filterbooks= filter(books);
    return capitalize(filterbooks);
}
const filterandcapitalize= capitalize(books);
console.log(filterandcapitalize);