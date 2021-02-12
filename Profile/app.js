function toggledarkmode() {
    document.body.classList.toggle('darkmode');

    var text = document.getElementById('darkmodebutton');

    if (text.innerHTML === "Dark Mode") {
        text.innerHTML = "Light Mode"
    } else {
        text.innerHTML = "Dark Mode"
    }
}

function like() {
    var likenum = document.getElementById('likenumber');
    if (likenum.innerHTML === "1") {
        likenum.innerHTML = "2"
    } else {
        likenum.innerHTML = "1"
    }

}