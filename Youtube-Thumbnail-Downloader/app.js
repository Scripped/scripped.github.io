function checkLink() {
    var youtubeLink = document.getElementById('youtubeLink').value;
    var Thumbnail = document.getElementById('Thumbnail')
    console.log('Youtube Link: ' + youtubeLink)

    function convertLink() {
        if (youtubeLink.includes('youtube.com')) {
            var ytID = youtubeLink.substring(youtubeLink.lastIndexOf("/") + 1)
            var ytID = ytID.replace("watch?v=", "")
        
            var newImage = "https://i.ytimg.com/vi/"+ ytID +"/maxresdefault.jpg";
            Thumbnail.src = newImage;
        }
        else if (youtubeLink.includes('youtu.be')) {
            var ytID = youtubeLink.substring(youtubeLink.lastIndexOf("/") + 1)
            var ytID = ytID.replace("watch?v=", "")
        
            var newImage = "https://i.ytimg.com/vi/"+ ytID +"/maxresdefault.jpg";
            Thumbnail.src = newImage;
        }

    }

    convertLink()

}

function downloadImage() {
    var Thumbnail = document.getElementById('Thumbnail').src;

    window.open(Thumbnail, "_blank")


}