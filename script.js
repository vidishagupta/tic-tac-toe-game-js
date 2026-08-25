let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let message = document.querySelector("#message");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;

        checkWinner();
    });
});

function checkWinner() {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos1 === pos2 && pos2 === pos3) {
            message.innerText = `Winner: ${pos1}`;
            disableBoxes();
            return;
        }
    }

    let draw = [...boxes].every((box) => box.innerText !== "");

    if (draw) {
        message.innerText = "It's a Draw!";
    }
}

function disableBoxes() {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });

    turnO = true;
    message.innerText = "";
});