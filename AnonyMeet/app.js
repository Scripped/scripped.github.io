
//vars 

var chatDiv = document.querySelector('.chat')
var videoDiv = document.querySelector('.videos')
var userVideo = document.getElementById('userVideo')
var randomUserColor = '#' + Math.floor(Math.random()*16777215).toString(16);
var loadingScreen = document.querySelector('.loadingScreen')
var userCountryText = document.querySelector('.country')
var messages = document.querySelector('.messages')
var messageContent = document.querySelector('.messageContent')

var userFace = document.querySelector('.userFace')

var countries = [
    "Afghanistan","[HIDDEN]","Albania","Algeria","[HIDDEN]","Angola","Anguilla","[HIDDEN]","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"
]

var emojis = [
    "😂", "😭", "☺", "😁", "😊", "😉", "😍", "😜", "😝",
    "😋", "😛", "😄", "😅", "😁", "😯"
]

var userResponses = [
    "Hello",
    "Hola",
    "hi",
    "Hi",
    "Heyo!",
    "hello",
    "hey",
    "go away",
    "Bye",
    "Good morning",
    "good evening"
]


userCountryText.innerHTML = countries[Math.floor(Math.random()*countries.length)];



function zoomChat() {
    videoDiv.classList.toggle('no-flex')
}

function load() {
    loadingScreen.classList.add('load');
    setTimeout(function skipUser() {
        loadingScreen.classList.remove('load');
        clearChat();
        // userVideo.style.setProperty('--user-color', '#' + Math.floor(Math.random()*16777215).toString(16));
        document.body.style.setProperty('--user-color', '#' + Math.floor(Math.random()*16777215).toString(16));
        userFace.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];
    }, 3000)
    
}

function clearChat() {
    userCountryText.innerHTML = countries[Math.floor(Math.random()*countries.length)];
    messages.innerHTML = '';
    messageContent.innerHTML = "";
}

function checkMessage() {
    var yourMessage = document.querySelector('.messageContent').innerHTML;
    
    function whitespaceCheck() {
        if (/^\s*$/.test(yourMessage)) {
            return console.warn('Whitespace - Message not sent.')
        }
        else if (yourMessage == '&nbsp;&nbsp;') {
            return console.warn('Whitespace - Message not sent.')
        }
        else if (yourMessage == '&nbsp;') {
            return console.warn('Whitespace - Message not sent.')
        }
        else if (yourMessage == '&nbsp;&nbsp;&nbsp;') {
            return console.warn('Whitespace - Message not sent.')
        }
        else {
            sendMessage()
        }
    }
    if (/^\s+$/.test(yourMessage)) {
        var yourMessage = yourMessage.replace(/&nbsp;/g,'')
        whitespaceCheck()
    }
    else if (/\s/.test(yourMessage)) {
        var yourMessage = yourMessage.replace(/&nbsp;/g,'');
        whitespaceCheck()
    }
    else {
        yourMessage.replace(/&nbsp;/g,'');
        whitespaceCheck()
    }
    
    yourMessage.replace(/^\xa0*([^\xa0]*)\xa0*$/g,'');


    function sendMessage() {

        var YourMessageContainer = document.createElement("div");
        YourMessageContainer.classList.add('yourMessage');
        YourMessageContainer.classList.add('message');

        var YourDetails = document.createElement("div");
        YourDetails.classList.add('you');
        YourDetails.classList.add('details');

        var ProfilePicture = document.createElement("div");
        ProfilePicture.classList.add('you');
        ProfilePicture.classList.add('Image');

        var ProfilePictureText = document.createElement("p");
        ProfilePictureText.innerHTML = "Y";

        var UserName = document.createElement("h5");
        UserName.innerHTML = "You";

        var text = document.createElement("p");
        text.classList.add('yourText')
        text.innerHTML = yourMessage;

        YourMessageContainer.append(YourDetails);
        YourDetails.append(ProfilePicture);
        ProfilePicture.append(ProfilePictureText);
        YourDetails.append(UserName);
        YourMessageContainer.append(text); 

        messages.append(YourMessageContainer);

        messageContent.innerHTML = "";
        chatDiv.scrollTo(0, chatDiv.scrollHeight);
        startChat()
    }
}
messageContent.addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.querySelector(".sendButton").click();
    }
});

messageContent.onpaste = (e) => {                                                      
    let cbContent = [...(e.clipboardData || e.originalEvent.clipboardData).items];   
        cbContent = cbContent.filter(i => /image/.test(i.type));                       
    
    if(!cbContent.length || cbContent.length === 0) return false;                     
    
    let reader = new FileReader();                                                     
    reader.onload = (e) => messageContent.innerHTML = messageContent.innerHTML + `<img src="${e.target.result}">`; 
    reader.readAsDataURL(cbContent[0].getAsFile());                                    
};



function userRespond() {
    var userResponse = userResponses[Math.floor(Math.random()*userResponses.length)]
    
    var UserMessageContainer = document.createElement("div");
    UserMessageContainer.classList.add('userMessage');
    UserMessageContainer.classList.add('message');

    var UserDetails = document.createElement("div");
    UserDetails.classList.add('user');
    UserDetails.classList.add('details');

    var ProfilePicture = document.createElement("div");
    ProfilePicture.classList.add('user');
    ProfilePicture.classList.add('Image');

    var UserName = document.createElement("h5");
    UserName.innerHTML = "AnonyUser";

    var text = document.createElement("p");
    text.classList.add('UserText')
    text.innerHTML = userResponse;

    UserMessageContainer.append(UserDetails);
    UserDetails.append(ProfilePicture);
    UserDetails.append(UserName);
    UserMessageContainer.append(text); 

    messages.append(UserMessageContainer);

    messageContent.innerHTML = "";
    chatDiv.scrollTo(0, chatDiv.scrollHeight);
}


function startChat() {

    
    


    var commandf = {
        command1: function () { 
            setTimeout(function loadResponse() {
                userRespond()
            }, Math.random()*5000)
        },
        command2: function () {
            setTimeout(load, Math.random()*8000)
        },
        command3: function () {
            console.log(' ')
        }
    }


    commandf[Object.keys(commandf)[Math.floor(Math.random()*Object.keys(commandf).length)]]();

}

    

       