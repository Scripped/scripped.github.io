
function darkmode() {
    document.body.classList.toggle('theme-dark')
}

       


/* function sendmessage() {

    if (document.getElementById('fairyt4ils').classList === 'userclicked') {
    var yourmessage = document.querySelector('.fairyt4ils');
    var yourmessagevalue = yourmessage.innerHTML;
    console.log(yourmessagevalue)
}


    yourmessagevalue = document.getElementById('messageinput').innerHTML;
    
    var YourMessageContainer = document.createElement("div");
    YourMessageContainer.classList.add('message');
    var ProfilePicture = document.createElement("img");
    ProfilePicture.src = "icons/ScrippedPFP.jpg";
    ProfilePicture.classList.add('profile-picture');

    var TextMessage = document.createElement("div");
    TextMessage.classList.add('textmessage');
    TextMessage.classList.add('you');
    var text = document.createElement("h2");
    text.innerHTML = yourmessagevalue;
    YourMessageContainer.prepend(ProfilePicture);
    YourMessageContainer.append(TextMessage);
    TextMessage.append(text); 

    
    messageLocation.append(YourMessageContainer);
    document.getElementById('messageinput').innerHTML = "";
}    
 */

/* var yourmessage = document.getElementById("messageinput");
yourmessage.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
   document.getElementById("sendbutton").click();
  }
}); */


/* function showContactMessage(fairyt4ils) {
    console.log(fairyt4ils)
    document.getElementById('fairyt4ils').classList.toggle('userclicked');
}


function showContactMessage(redr0ses) {
    console.log(redr0ses)
    document.getElementById('redr0ses').classList.toggle('userclicked');
}


function showContactMessage(ellystar) {
    console.log(ellystar)
    document.getElementById('ellystar').classList.toggle('userclicked');
} */

/*

function sendmessage() {
    yourmessagevalue = document.getElementById('messageinput').innerHTML;
    
    var YourMessageContainer = document.createElement("div");
    YourMessageContainer.classList.add('message');
    var ProfilePicture = document.createElement("img");
    ProfilePicture.src = "icons/ScrippedPFP.jpg";
    ProfilePicture.classList.add('profile-picture');

    var TextMessage = document.createElement("div");
    TextMessage.classList.add('textmessage');
    TextMessage.classList.add('you');
    var text = document.createElement("h2");
    text.innerHTML = yourmessagevalue;
    YourMessageContainer.prepend(ProfilePicture);
    YourMessageContainer.append(TextMessage);
    TextMessage.append(text); 

    
    messageLocation.append(YourMessageContainer);
    document.getElementById('messageinput').innerHTML = "";
}    

*/


document.querySelector('.ellystar').addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("sendbutton").click();
    }
});

document.querySelector('.redr0ses').addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("sendbutton").click();
    }
});

document.querySelector('.fairyt4ils').addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("sendbutton").click();
    }
});


document.getElementById('username').addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("setUsernameButton").click();
    }
});

document.querySelector('.ellystar').addEventListener('paste', function (e) {
    e.preventDefault()
    var text = e.clipboardData.getData('text/plain')
    document.execCommand('insertText', false, text)
  })
  

document.querySelector('.redr0ses').addEventListener('paste', function (e) {
    e.preventDefault()
    var text = e.clipboardData.getData('text/plain')
    document.execCommand('insertText', false, text)
  })
  

document.querySelector('.fairyt4ils').addEventListener('paste', function (e) {
  e.preventDefault()
  var text = e.clipboardData.getData('text/plain')
  document.execCommand('insertText', false, text)
})


function fairyt4ilsMessage() {
    document.getElementById('fairyt4ils').classList.toggle('userclicked');
    document.getElementById('redr0ses').classList.remove('userclicked');
    document.getElementById('ellystar').classList.remove('userclicked');

    document.querySelector('.contacts').classList.remove('show');


}


function redr0sesMessage() {
    document.getElementById('redr0ses').classList.toggle('userclicked');
    document.getElementById('fairyt4ils').classList.remove('userclicked');
    document.getElementById('ellystar').classList.remove('userclicked');

    document.querySelector('.contacts').classList.remove('show');


}


function ellystarMessage() {
    document.getElementById('ellystar').classList.toggle('userclicked');
    document.getElementById('redr0ses').classList.remove('userclicked');
    document.getElementById('fairyt4ils').classList.remove('userclicked');

    document.querySelector('.contacts').classList.remove('show');

}



function checkmessage() {

    if (document.getElementById('fairyt4ils').classList.contains("userclicked")) {
        var yourmessage = document.querySelector('.fairyt4ils');
        var yourmessagevalue = yourmessage.innerHTML.replace(/&nbsp;/g, '');
    }
    else if (document.getElementById('redr0ses').classList.contains("userclicked")) {
        var yourmessage = document.querySelector('.redr0ses');
        var yourmessagevalue = yourmessage.innerHTML.replace(/&nbsp;/g, '');
    }
    else if (document.getElementById('ellystar').classList.contains("userclicked")) {
        var yourmessage = document.querySelector('.ellystar');
        var yourmessagevalue = yourmessage.innerHTML.replace(/&nbsp;/g, '');
    }

    if (/^\s*$/.test(yourmessagevalue)) {
        return console.warn('Whitespace - Message not sent.')
        
    } else if (/\s/.test(yourmessagevalue)) {
        var yourmessagevalue = yourmessagevalue.replace(/&nbsp;/g, '');
        


        console.log('Message: '+ yourmessagevalue)
        sendmessage()
    }
    else {
        yourmessagevalue.replace(/&nbsp;/g, '');

        console.log('Message: '+ yourmessagevalue.replace(/&nbsp;/g, ''))
        sendmessage()
    }
    
    yourmessagevalue.replace(/^\xa0*([^\xa0]*)\xa0*$/g,"");
}


// -- SENDS MESSAGE TO USER -- //

function sendmessage() {

    var usernamevalue = document.getElementById('username').value;

    if (document.getElementById('fairyt4ils').classList.contains("userclicked")) {

        var yourmessage = document.querySelector('.fairyt4ils');
        var yourmessagevalue = yourmessage.innerHTML.replace(/&nbsp;/g, '');
        console.log('Message to fairyt4ils: ' + yourmessagevalue);

        var messageLocation = document.getElementById('fairyt4ils');

    }
    
    else if (document.getElementById('redr0ses').classList.contains("userclicked")) {

        var yourmessage = document.querySelector('.redr0ses');
        var yourmessagevalue = yourmessage.innerHTML.replace(/&nbsp;/g, '');
        console.log('Message to redr0ses: ' + yourmessagevalue);

        var messageLocation = document.getElementById('redr0ses');

    }
    
    else if (document.getElementById('ellystar').classList.contains("userclicked")) {

    
        var yourmessage = document.querySelector('.ellystar');
        var yourmessagevalue = yourmessage.innerHTML.replace(/&nbsp;/g, '');
        console.log('Message to ellystar' + yourmessagevalue);

        var messageLocation = document.getElementById('ellystar');

    }

    var YourMessageContainer = document.createElement("div");
    YourMessageContainer.classList.add('message');
    var ProfilePicture = document.createElement("img");
    ProfilePicture.src = "icons/ScrippedPFP.jpg";
    ProfilePicture.classList.add('profile-picture');

    var TextMessage = document.createElement("div");
    TextMessage.classList.add('textmessage');
    TextMessage.classList.add('you');

    var usernametext = document.createElement("h3");
    usernametext.classList.add('username-box');
    usernametext.innerHTML = usernamevalue;

    var text = document.createElement("h2");
    text.innerHTML = yourmessagevalue;
    YourMessageContainer.prepend(ProfilePicture);
    
    YourMessageContainer.append(TextMessage);
    TextMessage.append(usernametext);
    TextMessage.append(text); 

    
    messageLocation.append(YourMessageContainer);
    yourmessage.innerHTML = "";
    window.scrollTo(0, document.body.scrollHeight);
}

// -- MESSAGE SENT -- //


// -- COUNTER FOR THE POPUP -- // 
var usernameid = document.getElementById("username");
var numbercounter = document.getElementById("numbercounter");
var maxlength = usernameid.getAttribute("maxlength")

usernameid.onkeyup = ()=> {
    numbercounter.innerHTML = maxlength - usernameid.value.length;
}

// -- END OF COUNTER -- // 


// -- CHECKS USERNAME HAS NO WHITESPACE --//
var usernamevalue = document.getElementById('username').value;

function checkUsername() {
    var usernamevalue = document.getElementById('username').value;
    console.log(document.getElementById('username').value)

    if (/^\s*$/.test(usernamevalue)) {
        return console.warn('Whitespace - Username Invalid.')
        
    } else if (/\s/.test(usernamevalue)) {
        var usernamevalue = usernamevalue
        usernamevalue.replace(/\s/, '')

        console.log('Username: '+ usernamevalue)
        setUsername()
    }
    else {
        console.log('Username: ' + usernamevalue)
        setUsername()
    }   
}

// -- END OF WHITESPACE CHECK -- // 


//-- SETS USERNAME --//

function setUsername() {
    
    usermessages()
    document.querySelector('.popup').classList.toggle('animated-slide-off')

    setTimeout(function hidepopup() {
        document.querySelector('.popup').style.display = "none";
    }, 2000)


}



//-- END OF SET USERNAME & POPUP CLOSE --//


/// --- USER MESSAGES -- //

function usermessages() {
    var usernamevalue = document.getElementById('username').value;

    var usernametexts = document.getElementsByClassName('usernameVal');

    [].slice.call(usernametexts).forEach(function (usernametext) {
        usernametext.appendChild(document.createTextNode(usernamevalue));
    });
}


var today = new Date()
var timeofday = today.getHours()

if (timeofday < 12) {
    document.getElementById('TimeOfDay').appendChild(document.createTextNode('morning'))
} else if (timeofday < 18) {
    document.getElementById('TimeOfDay').appendChild(document.createTextNode('afternoon'))
} else {
    document.getElementById('TimeOfDay').appendChild(document.createTextNode('evening'))
}

function toggleMenu() {
    document.querySelector('.contacts').classList.toggle('show');
}