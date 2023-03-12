
import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(function(data) {
  const timePlay = data.seconds;
  localStorage.setItem('videoplayer-current-time', timePlay);
}, 1000)
);

const keyPlay = localStorage.getItem('videoplayer-current-time');
// console.log(keyPlay);
if(keyPlay !== null){
  console.log(keyPlay);
  player.setCurrentTime(keyPlay);
  
} else{
  return
};

