let count = 0;
let countStr = document.getElementById("count-count");
let countSave = document.getElementById("save-save");


function increment(){
  count += 1;
  countStr.textContent = count;
}

function decrement(){
    count -= 1;
    countStr.textContent = count;
}

function reset(){
    count = 0;
    countStr.textContent = count;
}

function save(){
    let sample1 = count + " - ";
    countSave.textContent += sample1;
}

