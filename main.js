
var submarines =document.getElementById("submarine1").animate(
  [
    { transform: 'translateX(225%)' },
  ],{
      duration: 8500,
      iterations:Infinity,
  });
   
var sharks =document.getElementById("shark1").animate(
    [
      { transform: 'translateX(-245%)'  },
    
    ],{
        duration: 10000,
        iterations:Infinity,
    });

var fishes= document.getElementById("fish1").animate(
        [
          { transform: 'translateX(140%)' },
        ],{
            duration: 7000,
            iterations:Infinity,
        });


    document.querySelector(".play").addEventListener("click",function(){
          submarines.play();
          sharks.play();
          fishes.play();
   })
   document.querySelector(".pause").addEventListener("click",function(){
    submarines.pause();
    sharks.pause();
    fishes.pause();
})
document.querySelector(".reverse").addEventListener("click",function(){
  submarines.reverse();
  sharks.reverse();
  fishes.reverse();
})
document.querySelector(".updatePlaybackRate").addEventListener("click",function(){
  submarines.updatePlaybackRate(submarines.playbackRate*1.2);
  sharks.updatePlaybackRate(sharks.playbackRate*1.2);
  fishes.updatePlaybackRate(fishes.playbackRate*1.2);
})
