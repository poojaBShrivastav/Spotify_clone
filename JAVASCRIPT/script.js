const audioElement = new Audio("./song/1.mp3");
const gif = document.getElementById("gif");
const songItem = Array.from(document.getElementsByClassName("songItem"))
const masterSongName = document.getElementById("masterSongName")

let songs = [
    {
        songName: "salam-e-ishq 1",
        filePath: "./song/1.mp3",
        coverPath: "./cover/1.jpg"
    },
    {
        songName: "salam-e-ishq 2",
        filePath: "./song/2.mp3",
        coverPath: "./cover/2.jpg"
    },
    {
        songName: "salam-e-ishq 3",
        filePath: "./song/3.mp3",
        coverPath: "./cover/3.jpg"
    },
    {
        songName: "salam-e-ishq 4",
        filePath: "./song/4.mp3",
        coverPath: "./cover/4.jpg"
    },
    {
        songName: "salam-e-ishq 5",
        filePath: "./song/5.mp3",
        coverPath: "./cover/5.jpg"
    },
    {
        songName: "salam-e-ishq 6",
        filePath: "./song/6.mp3",
        coverPath: "./cover/6.jpg"
    },
    {
        songName: "salam-e-ishq 7",
        filePath: "./song/7.mp3",
        coverPath: "./cover/7.jpg"
    },
    {
        songName: "salam-e-ishq 8",
        filePath: "./song/8.mp3",
        coverPath: "./cover/8.jpg"
    },
    {
        songName: "salam-e-ishq 9",
        filePath: "./song/9.mp3",
        coverPath: "./cover/9.jpg"
    },
    {
        songName: "salam-e-ishq 10",
        filePath: "./song/10.mp3",
        coverPath: "./cover/10.jpg"
    },
]

songItem.forEach((element, i) => {
    console.log(element, i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songTitle")[0].innerText = songs[i].songName;
})

let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let myprogressBar = document.getElementById("myProgressBar");


masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {

        audioElement.play()

        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    } else {

        audioElement.pause();

        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener("timeupdate", () => {
    console.log("TimeUoToDate");
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    console.log(progress);
    myprogressBar.value = progress
})

myprogressBar.addEventListener("change", () => {
    audioElement.currentTime = (myprogressBar.value * audioElement.duration) / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.add("fa-circle-play")
        element.classList.remove("fa-circle-pause")
    })
    
}   

   
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.addEventListener("click",(e)=>{
            makeAllPlays()
           songIndex = parseInt(e.target.id);
                e.target.classList.remove("fa-circle-play");
                gif.style.opacity = 1;
                e.target.classList.add("fa-circle-pause");
                audioElement.src = `./song/${songIndex+1}.mp3`
                audioElement.currentTime = 0;
                audioElement.play()
                masterSongName.innerText = songs[songIndex].songName
                masterPlay.classList.remove("fa-play-circle");
                masterPlay.classList.add("fa-pause-circle");

        })
    })

    document.getElementById("next").addEventListener("click",()=>{
        if(songIndex>9){
            songIndex=0
        }
        else{
            songIndex +=1
        }
        audioElement.src = `./song/${songIndex+1}.mp3`
        audioElement.currentTime = 0;
        audioElement.play()
        masterSongName.innerText = songs[songIndex].songName
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    })

    document.getElementById("previous").addEventListener("click",()=>{
        if(songIndex<=0){
            songIndex=0
        }
        else{
            songIndex -=1
        }
        audioElement.src = `./song/${songIndex+1}.mp3`
        audioElement.currentTime = 0;
        masterSongName.innerText = songs[songIndex].songName
        audioElement.play()
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    })
    
