let expression = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
            try {
                expression = eval(expression);
                document.getElementById("display").innerText = expression;

            }
            catch {
                document.getElementById("display").innerText = "error";

            }
        } else if (e.target.innerHTML == 'clr') {
            expression = "";
            document.getElementById("display").innerText = expression;


        } else if (e.target.innerHTML == '↩') {
            document.getElementById("display").innerText =
                document.getElementById("display").innerText.slice(0, -1);
            expression = expression.slice(0, -1);

        }
        else {
            if (e.target.innerHTML == "÷") {
                expression += e.target.value;
            }
            else if (e.target.innerHTML == "%") {
                expression += e.target.value;

            }
            else if (e.target.innerHTML == "X") {
                expression += e.target.value;

            }
            else if (e.target.innerHTML == "π") {
                expression  += e.target.value;

            }
            else if (e.target.innerHTML == "e") {
                expression += e.target.value;

            }
            else {
                expression +=  e.target.innerHTML;
            }
            document.getElementById("display").innerHTML = expression;
        }
    })
})