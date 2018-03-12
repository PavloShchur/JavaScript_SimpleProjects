let getInnerWidth = () => {return window.innerWidth;};
let getInnerHeight = () => {return window.window.innerHeight;};

let playground_div = null;

function createPlayground() {
    console.log('create playground');
    return new Promise(function(resolve) {
        playground_div = document.getElementById("org_div1");

            let newDiv = document.createElement("div");
            newDiv.style.borderColor = "red";
            newDiv.style.backgroundColor = "red";
            newDiv.style.width = "800px";
            newDiv.style.height = "700px";

            document.body.insertBefore(newDiv, playground_div);
            resolve();
    });
}

function playSound(){
    let audio = document.createElement('audio');
    audio.style.display = "none";
    audio.src = url;
    audio.autoplay = true;
    audio.onended = function(){
        audio.remove() //Remove when played.
    };
    document.body.appendChild(audio);
}