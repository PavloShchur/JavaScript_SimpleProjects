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

let currentDroppable = null;

ball.onmousedown = function(event) {

    let shiftX = event.clientX - ball.getBoundingClientRect().left;
    let shiftY = event.clientY - ball.getBoundingClientRect().top;

    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    document.body.append(ball);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        ball.style.left = pageX - shiftX + 'px';
        ball.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        ball.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        ball.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
            if (currentDroppable) { // null when we were not over a droppable before this event
                leaveDroppable(currentDroppable);
            }
            currentDroppable = droppableBelow;
            if (currentDroppable) { // null if we're not coming over a droppable now
                // (maybe just left the droppable)
                enterDroppable(currentDroppable);
            }
        }
    }

    document.addEventListener('mousemove', onMouseMove);

    ball.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        ball.onmouseup = null;
    };

};

function enterDroppable(elem) {
    elem.style.background = 'pink';
}

function leaveDroppable(elem) {
    elem.style.background = '';
}

ball.ondragstart = function() {
    return false;
};