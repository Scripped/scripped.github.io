

//vars

var currentVideoName = document.querySelector('.video-name');
var tipText = document.querySelector('.tipText')
var postButton = document.querySelector('.post-button')
var videoPage = document.querySelector('.video-page')
var editorPage = document.querySelector('.editor-page')
var loadingPage = document.querySelector('.loading-page')
var viewNumber = document.querySelector('.viewNumber')
var credits = document.querySelector('.credits')
var nextButton = document.querySelector('.next-button')

//

document.addEventListener('mousemove', function(ev){
    document.querySelector('.mouse').style.transform = 'translateY('+(ev.clientY)+'px)';
    document.querySelector('.mouse').style.transform += 'translateX('+(ev.clientX)+'px)';            
},false);

document.onclick = function() {
    const clickSound = document.querySelector('.clicksound')
    clickSound.play();
  }

function startGame() {
    document.querySelector('.start-button').style.display = "none";
    document.getElementById('tip').style.display = "block";
    document.querySelector('.computer-content').style.opacity = 1;

    const audio = document.querySelector("audio");
    audio.play();
}

/*
function goNext(tip) {
    console.log(tip)
    var tipDiv = tip.parentNode;
    console.log(tipDiv)
}
*/

var messages = {
    load: {
        savingVideo: "Saving video...",
    },
    success: {
        videoPublished: "Video published successfully. Let's wait for people to see it.",
        sevenHundredMilestone: "Woah! 700 views. Good job!",
        tenThousandMilestone: "10,000 views! Way to go.",
        thirtyThousandMilestone: "Woah, you're going viral!",
        gameEnd: "You finished the game! Good job."
    },

    errors: {
        errorMessage: "An error occured.",
    },

    tips: {
        tip1: "You've just made a video, get ready to post it!",
        tip2: "What would you like to call this video?",
        tip3: "Click the 'Post' button to post your video.",
    },
    
}

var i = 1;

function nextTip(tip) {
    var tipDiv = tip.parentNode;

    if (tipDiv.id.includes('tip')) {

        if (i < 5) {
        var tipIDPlusOne = 'tip' + i;
        tipDiv.id = tipIDPlusOne;
        var newIdTip = tipDiv;

        i++
        }
        
        
        if (tipDiv.id == 'tip1') {
            tipText.innerHTML = messages.tips.tip1;
        }
        else if (tipDiv.id == 'tip2') {
            tipText.innerHTML = messages.tips.tip2;
            changeVideoName()
        }
        else if (tipDiv.id == 'tip3') {
            tipText.innerHTML = messages.tips.tip3;
            setVideoName()
        }
        else if (tipDiv.id == 'tip4') {
            saveVideo()
        }
        else if (tipDiv.id == 'tip5') {
            tipText.innerHTML = messages.tips.tip5;
        }
        console.log(tipText.innerHTML)

    }  
}

function changeVideoName() {

    currentVideoName.setAttribute('contenteditable', true);
    currentVideoName.classList.add('glow');
    currentVideoName.select();


currentVideoName.addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.querySelector('.next-button').click();
    }
});

}

function setVideoName() {

    currentVideoName.setAttribute('contenteditable', false);
    window.getSelection().removeAllRanges();
    currentVideoName.classList.remove('glow');
    console.log('Video Name: ' + currentVideoName.value)

    var videoNameTexts = document.getElementsByClassName('video-name');
    [].slice.call(videoNameTexts).forEach(function (videonames) {
        videonames.appendChild(document.createTextNode(currentVideoName.value));
    });

    postButton.disabled = false;
    postButton.classList.add('post-glow')
}


function saveVideo() {

        postButton.classList.remove('post-glow')

        editorPage.style.display = "none";
        nextButton.disabled = true;
        nextButton.style.display = "none";
        tipText.innerHTML = messages.load.savingVideo;
        loadingPage.style.display = "block";
        setTimeout(function goToVideoPage() {
            editorPage.style.display = "none";
            loadingPage.style.display = "none";

            const successSound = document.querySelector('.successSound')
            successSound.play();
            tipText.innerHTML = messages.success.videoPublished;

            videoPage.style.display = "block";
        }, 9000)

        setTimeout(function incrementViews() {
            var views = 1;
            viewNumber.innerHTML = views

            var interval = null;
            var maxCount = 700000;
            var callback = function() {
                var currentviewNumber = parseInt(viewNumber.innerHTML)
                var add = 1;
                viewNumber.innerHTML =  currentviewNumber + add;


                if (currentviewNumber == 700) {
                    const successSound = document.querySelector('.successSound')
                    successSound.play();
                    tipText.innerHTML = messages.success.sevenHundredMilestone;
                }
                else if (currentviewNumber == 10000) {
                    const successSound = document.querySelector('.successSound')
                    successSound.play();
                    tipText.innerHTML = messages.success.tenThousandMilestone;
                }
                else if (currentviewNumber == 30000) {
                    const successSound = document.querySelector('.successSound')
                    successSound.play();
                    tipText.innerHTML = messages.success.thirtyThousandMilestone;
                }

                if (currentviewNumber === maxCount) {
                    clearInterval(interval);
                    add = 0
                    viewNumber = maxCount;
                    tipText.innerHTML = messages.success.gameEnd;

                    setTimeout(function fadeToCredits() {
                        credits.classList.add('fade-out')
                        credits.style.display = "block";
                    })
                }

            }
            interval = setInterval(callback, Math.random()*90);
        }, 1200)
}
