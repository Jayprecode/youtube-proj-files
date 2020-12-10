// Set initial count
let count = 0;

//Select value and buttons
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

//OR
buttons.forEach(function (btn) {
    btn.addEventListener("click", function (btns) {
        const styles = btns.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        }
        else if (styles.contains("increase")) {
            count++;
        }
        else{
            count = 0;
            output = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
          value.style.color = "red";
        }
        if (count === 0) {
          value.style.color = "#1e2d3a";
        }
        value.textContent = count;
    })
})

/* OR WE USE TERNARY
SINCE THE OPERATOR IS REPRESENTED BY A QUESTION MARK (?) ON LINE 40 & 41 .
SOMETIMES IT'S CALLED "TERNARY", BECAUSE THE OPERATOR HAS THREE OPERANDS*/


// buttons.forEach(function (btn) {
//     btn.addEventListener("click", function (knob) {
//         const styles = knob.currentTarget.classList;
//         styles.contains("decrease") ? --count :
//             styles.contains("increase") ? count++ :
//                 count = 0;
//         if (styles.contains("reset")) {
//             count = 0;
//         }
//         if (count > 0) {
//           value.style.color = "green";
//         }
//         if (count < 0) {
//           value.style.color = "red";
//         }
//         if (count === 0) {
//           value.style.color = "#1e2d3a";
//         }
//         value.textContent = count;
//     })
// })

