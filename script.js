console.log("Welcome to Spotify")

//  .............INITILIAZING THE VARIABLES.............
let audioElement  = new Audio('songs/1.mp3')
// audioElement.play()
let songIndex = 1
let masterPlay = document.getElementById("masterPlay")
let myProgressBar = document.getElementById("myProgressBar")
let gif = document.getElementById("gif")
let songItems = Array.from(document.getElementsByClassName("songItem"))

let songs = [
        {songNames:"Sing me to Sleep", filePath:"songs/2.mp3", songCover:"covers/2.jpg"},
        {songNames:"Salame-e-Ishq", filePath:"songs/1.mp3", songCover:"covers/1.jpg"},
        {songNames:"Ae dil hy Mushkil", filePath:"songs/3.mp3", songCover:"covers/3.jpg"},
        {songNames:"Heartless- Arijit Singh", filePath:"songs/4.mp3", songCover:"covers/4.jpg"},
        {songNames:"Blue Eyes- Honey Singh", filePath:"songs/5.mp3", songCover:"covers/5.jpg"},
        {songNames:"Chal wahan jaate hain", filePath:"songs/6.mp3", songCover:"covers/6.jpg"},
        {songNames:"Me woh chand", filePath:"songs/7.mp3", songCover:"covers/7.jpg"},
        {songNames:"Att Krti-Jessie Gill", filePath:"songs/8.mp3", songCover:"covers/8.jpg"},
        {songNames:"Filhaal tera ho jaun", filePath:"songs/9.mp3", songCover:"covers/9.jpg"},
        {songNames:"Sing me to Sleep", filePath:"songs/10.mp3", songCover:"covers/10.jpg"}
]


// ...........CHANGING NAMES AND COVER PHOTOS...........


songItems.forEach((element, i) => {
    element.getElementsByClassName("songName")[0].innerText = songs[i].songNames;
});


// ..............HANDLE PLAY PAUSE CLICK....................
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime==0){
        audioElement.play()
        masterPlay.innerHTML = "<img src=\"pause.png\" alt=\"\" >"
        gif.style.opacity = 1
    }
    else{
        audioElement.pause()
        masterPlay.innerHTML = "<img src=\"play.png\" alt=\"\" >"
        gif.style.opacity = 0
    }
})

// .....................LISTENING TO EVENTS..................
audioElement.addEventListener("timeupdate", ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100
})

// .............HANDLING SINGLE PLAY BUTTON ALOG SONG TITLE..........

function makeAllPlay(){
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
       element.src = "play.png"
    })
}
function updateSongTitle(){
    document.getElementById("songTitle").innerText = songs[songIndex-1].songNames
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element,i)=>{
    element.addEventListener("click", (e)=>{
        console.log(e.target)
        makeAllPlay();
        songIndex = parseInt(e.target.id)
        // audioElement.src = "songs/3.mp3"
        audioElement.src = `songs/${songIndex}.mp3`
        audioElement.currentTime = 0
        audioElement.play()
        masterPlay.innerHTML = "<img src=\"pause.png\" alt=\"\" >"
        updateSongTitle()
        gif.style.opacity = 1

    })
})
masterForward.addEventListener("click", ()=>{
    if (songIndex<10 && songIndex>=0){
        songIndex+=1
        audioElement.src = `songs/${songIndex}.mp3`
        audioElement.currentTime = 0
        audioElement.play()
        masterPlay.innerHTML = "<img src=\"pause.png\" alt=\"\" >"
        console.log(songIndex)
        updateSongTitle()
        gif.style.opacity = 1
    }
})
masterBackward.addEventListener("click", ()=>{
    if (songIndex<=10 && songIndex>1){
        songIndex-=1
        audioElement.src = `songs/${songIndex}.mp3`
        audioElement.currentTime = 0
        audioElement.play()
        masterPlay.innerHTML = "<img src=\"pause.png\" alt=\"\" >"
        console.log(songIndex)
        updateSongTitle()
        gif.style.opacity = 1
    }
})
let ctrl = 0;
burger.addEventListener("click", ()=>{
    if(ctrl==0){

        console.log("clicked")
        document.getElementById("Nav").style.height = "200px"
        document.getElementById("navBar").style.display = "block"
        ctrl = 1
    }
    else{
        ctrl=0;
        document.getElementById("Nav").style.height = "70px"
        document.getElementById("navBar").style.display = "none"       
    }
})
