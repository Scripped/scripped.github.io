

var url = window.location.toString();
searchAr = url.split("=");
var searchTerm = searchAr[1];
console.log(searchTerm)

document.title = searchTerm + ' | Famous Robloxians';

var allContent = document.querySelector('.allContent').children;

var column = document.querySelectorAll('.allContent .column')

for (i = 0; i < column.length; i++) {
    if (!column[i].textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
        column[i].remove();
    }
}

console.log(allContent)