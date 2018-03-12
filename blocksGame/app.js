document.body.onload = start;

function start() {
    createPlayground().then(function () {
        addElement().then(function () {
            for(let i = 0; i < 10; i++) {
                console.log('init');
                dragElement(document.getElementById(("mydiv" + i)));
            }
        })
    })
}

function dragElement(element) {
    console.log('dragElement');
    let pos1, pos2, pos3, pos4 = 0;
    element.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        console.log('dragMouseDown');
        element.style.position = "absolute";
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}