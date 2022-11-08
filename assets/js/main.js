// =============== lev2_1: for loop Array =================

function imageArray() {
    let returnArray = [];

    for (i = 1; i <= 100; i++) {

        //${i} ist das gleiche wie + (i) +
        if (i < 10) {
            returnArray.push(`image_00${i}.jpg`);
        } else if (i < 100) {
            returnArray.push(`image_0${i}.jpg`);
        } else {
            returnArray.push(`image_${i}.jpg`);
        }
    }
    console.log(returnArray);
}
imageArray();




// ================ lev2_2: loop with input ===================

function enter() {
    let array = [];
    // console.log(array);
    let input = document.querySelector("#userInput").value;
    // console.log(input);
    let output = document.querySelector("#output");

    for (let i = 0; i < input; i++) {
        // console.log(i);
        array += "o";
    }

    output.innerHTML = `L${array}p`;
    console.log(`L${array}p`);
}