function nextPage(sect) {
    var nextButton = sect

    var sect = sect.parentNode;


    if (sect.id.includes('1')) {
        var page = document.getElementById('page2');
        page.classList.remove('hide')
        sect.classList.add('hide')  
    }
    else if (sect.id.includes('2')) {
        var page = document.getElementById('page3');
        page.classList.remove('hide')
        sect.classList.add('hide')  
    }
    else if (sect.id.includes('3')) {
        nextButton.disabled = true;
    }

}
function prevPage(sect) {
    var prevButton = sect

    var sect = sect.parentNode;

    if (sect.id.includes('1')) {
        prevButton.disabled = true;
        
    }
    else if (sect.id.includes('2')) {
        var page = document.getElementById('page1');
        page.classList.remove('hide')
        sect.classList.add('hide')  
    }
    else if (sect.id.includes('3')) {
        var page = document.getElementById('page2');
        page.classList.remove('hide')
        sect.classList.add('hide')  
    }

}