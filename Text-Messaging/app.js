function sendmessage() {
    var messageid = document.getElementById('messagetext');
    var messagevalue = messagetext.value;

    var newdiv = document.createElement("div");
    newdiv.classList.add('your-message');
    var smsdiv = document.createElement("div");
    smsdiv.classList.add('sms');
    var text = document.createElement("h2");
    text.innerHTML = messagevalue;
    newdiv.appendChild(smsdiv);
    smsdiv.appendChild(text);
    document.getElementById("messagebox").appendChild(newdiv);

    document.getElementById('messagetext').value = "";
    setTimeout(loadbutton(), 80000);
}

function loadbutton() {
    document.getElementById('newbutton').style.display = "block";
}

function typinguser() {
    document.getElementById('newbutton').style.display = "none";
    setTimeout(function(){ 

        var newdiv = document.createElement("div");
    newdiv.classList.add('user-message');
    var newimg = document.createElement("img")
    newimg.src = "profileicon.png"
    var smsdiv = document.createElement("div");
    smsdiv.classList.add('sms');
    smsdiv.classList.toggle('blocknew');
    var text = document.createElement("h2");
    text.innerHTML = "Stop messaging me.";
    newdiv.appendChild(newimg);
    newdiv.appendChild(smsdiv);
    smsdiv.appendChild(text);
    document.getElementById("messagebox").appendChild(newdiv);

    document.getElementById('messagetext').disabled = true;
    document.getElementById('messagebutton').disabled = true;
    document.getElementById('messagebutton').style.cursor = "auto";

    document.getElementById('messagetext').value = "You can no longer send messages to this user."

    document.getElementById('status').style.display = "none";

    document.getElementById('newbutton').style.display = "none"
     }, 3000);

     document.getElementById('status').innerHTML = "Typing...";
}


function opencontacts() {
    document.querySelector('.contacts').classList.toggle('show');
    document.querySelector('.messages').classList.toggle('show');

    if (
    document.getElementById('msg').innerHTML === "Contacts") {
        document.getElementById('msg').innerHTML = "Messages"
    } else {
        document.getElementById('msg').innerHTML = "Contacts"
    }
}
