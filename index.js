
var numberofdrums = document.querySelectorAll(".drum").length;

// For detecting Button Press
for( var i = 0; i < numberofdrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHtml = this.innerHTML;

        SoundEffect(buttonInnerHtml);

    });
}

// for detecting Keyboard Press
document.querySelector("body").addEventListener("keydown", function(Event){
    SoundEffect(Event.key);
});

function SoundEffect(key){
    switch (key) {
            case "w":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;

            case "a":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;

            case "s":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            case "d":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;

            case "j":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;

            case "k":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;

            case "l":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

            default:
                break;
        }
    var colorChange = document.querySelector("." + key);
    colorChange.style.opacity = 0.1;

    setTimeout(function(){
        colorChange.style.opacity = 1;
    }, 100);
}
