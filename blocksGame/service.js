const colors = ['red', 'blue', 'green'];

let my_div = newDiv = null;

function addElement() {
    console.log('addElement');

    return new Promise(function(resolve, reject) {
        my_div = document.getElementById("org_div1");

        for(let i = 0; i < 10; i++) {
            let newDiv = document.createElement("div");
            newDiv.id = "mydiv" + i;
            newDiv.className = "drag";
            newDiv.style.color = "red";
            newDiv.style.width = "100px";
            newDiv.style.height = "100px";
            newDiv.style.backgroundColor = colors[Math.floor(Math.random() * 3)];

            newDiv.onmousedown = function (event) {
                dragElement(document.getElementById(event.target.id));
            };

            document.body.insertBefore(newDiv, my_div);
            resolve();
        }
    });
}