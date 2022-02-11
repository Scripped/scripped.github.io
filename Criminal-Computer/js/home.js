function dark(button) {
    document.querySelector('html').classList.toggle('dark')
    button.classList.toggle('dark')
}

function start() {
    var page = document.querySelector('html')
    page.requestFullscreen()
    document.querySelector('link[rel="stylesheet"]').remove();

    var newStylesheet = document.createElement('link')
    newStylesheet.setAttribute('rel', 'stylesheet')
    newStylesheet.href = 'css/style.css'
    document.querySelector('head').append(newStylesheet)

    document.querySelector('.start').remove();


}


dragElement(document.querySelector(".notepad"));


function hide(app) {
    var fullApp = app.parentNode.parentNode.parentNode;

    fullApp.classList.add('hide');


    if (fullApp.localName.includes('chrome')) {
        document.querySelector('webpage').classList.add('hide')
    }
}


function maximise(app) {
    var fullApp = app.parentNode.parentNode.parentNode;

    fullApp.classList.toggle('maximise');
    
}


function openApp(app) {
    if (app == 'notepad') {
        var elm = document.querySelector('.notepad')
        if (elm.classList.contains('hide')) {
            elm.classList.remove('hide')
        }
        else {
            elm.classList.add('hide')
        }
    }
    else if (app == 'chrome') {
        var elm = document.querySelector('chrome')
        if (elm.classList.contains('hide')) {
            elm.classList.remove('hide')
            document.querySelector('webpage').classList.remove('hide')
        }
        else {
            elm.classList.add('hide')
            document.querySelector('webpage').classList.add('hide')
        }
    }
}




var year = new Date
document.getElementById('year').innerHTML = year.getFullYear()


      
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.querySelector('.notepad header')) {
        document.querySelector('.notepad header').onmousedown = dragMouseDown;
    }
    else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}


var time = new Date
var x = time.getHours() + ':' + time.getMinutes();
document.querySelector('.time').innerHTML = x

var y = time.getDate() + '/' + (time.getMonth()+1) + '/' + time.getFullYear();
document.querySelector('.date').innerHTML = y