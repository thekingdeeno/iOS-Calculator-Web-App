
var display = document.querySelector("#display");
var numbers = document.querySelectorAll(".darker-grey-btn");
var symKeys = document.querySelectorAll(".orange-btn");
var funcKeys= document.querySelectorAll(".grey-btn");
                    // On Screen Numbers //
var noOfButtons = numbers.length;
for (var i = 0; i < noOfButtons; i++) {
    numbers[i].addEventListener("click", function(){
        var buttonValue = this.innerHTML;
        var displayValue = $("#display").attr("value");
        string = displayValue+buttonValue;
        $("#display").attr("value", string);
        console.log(display)
    })
}
                    // Keyboard Numbers //
document.addEventListener("keypress", function (event) {
if (isNaN(event.key)==false) {
    var keyValue = event.key
} else {
    var keyValue = ""
}
    var displayValue = $("#display").attr("value");
        string = displayValue+keyValue;
        $("#display").attr("value", string);
        console.log(display)
})
// calculator operator

function sum(no1,no2) {
    ans = no1 + no2;
}
function sub(no1,no2) {
    ans = no1 - no2;
}
function multi(no1,no2) {
    ans = no1 * no2;
}
function div(no1,no2) {
    ans = no1 / no2;
}
function equals() {
    $("#display").attr("value", ans);
}


                    // Calc Function Buttons //
    var noOfFunc = funcKeys.length;
for (var i = 0; i < noOfFunc; i++) {
    funcKeys[i].addEventListener("click", function(){
        pressedKey = this.innerHTML;
        funcBtn(pressedKey);
    })
}
    function funcBtn(key) {
        switch (key) {
            case "AC":
                $("#display").attr("value", "");
                $("#display").attr("value-one", "");
                $("#display").attr("value-two", "");
                $("#display").attr("answer", "");
            break;

            case "+/-":
               var string = $("#display").attr("value");
               var signValue = "-" + string;
                $("#display").attr("value", signValue);
            break;

            case "%":
               var string = $("#display").attr("value");
               var newValue = string / 100;
               $("#display").attr("value", newValue);
            break;

            default:
                console.log(key)
        }
    };
                    // Math Symbols Buttons //
    var noOfSym = symKeys.length;
for (var i = 0; i < noOfSym; i++) {
    symKeys[i].addEventListener("click", function(){
        pressedKey = this.innerHTML;

        solve(pressedKey)
        console.log(pressedKey)
    })
}
    function solve(key) {
        switch (key) {
            // DIVISION //
            case "/":
                $("#display").attr("value-one", $("#display").attr("value"));
                $("#display").attr("value", "");
                if ($("#display").attr("answer") > 0) {
                    $("#display").attr("value-one", $("#display").attr("answer"));
                }
                function div(no1,no2) {
                    ans = no1 / no2;
                }
                for (var i = 0; i < noOfButtons; i++) {
                    numbers[i].addEventListener("click", function(){
                        var newButtonValue = this.innerHTML;
                        $("#display").attr("value-two", $("#display").attr("value"));
                        var no1 = $("#display").attr("value-one")
                        var no2 = $("#display").attr("value-two")

                        div(no1,no2)
                        $("#display").attr("answer", ans);
                        console.log(ans);
                    });
                    document.addEventListener("keypress", function (event) {

                        $("#display").attr("value-two", $("#display").attr("value"));
                        var no1 = $("#display").attr("value-one")
                        var no2 = $("#display").attr("value-two")

                        div(no1,no2)
                        $("#display").attr("answer", ans);
                        console.log(ans);

                    }
                )
                }
                break;
            // MULTIPLICTION //
            case "x":
                $("#display").attr("value-one", $("#display").attr("value"));
                $("#display").attr("value", "");
                if ($("#display").attr("answer") > 0) {
                    $("#display").attr("value-one", $("#display").attr("answer"));
                }
                function multi(no1,no2) {
                    ans = no1 * no2;
                }
                for (var i = 0; i < noOfButtons; i++) {
                    numbers[i].addEventListener("click", function(){
                        var newButtonValue = this.innerHTML;
                        $("#display").attr("value-two", $("#display").attr("value"));
                        var no1 = $("#display").attr("value-one")
                        var no2 = $("#display").attr("value-two")

                        multi(no1,no2)
                        $("#display").attr("answer", ans);
                        console.log(ans);
                    });
                }
                document.addEventListener("keypress", function (event) {

                    $("#display").attr("value-two", $("#display").attr("value"));
                    var no1 = $("#display").attr("value-one")
                    var no2 = $("#display").attr("value-two")

                    multi(no1,no2)
                    $("#display").attr("answer", ans);
                    console.log(ans);

                }
            )
                break;
            // SUBTRACTION //
            case "-":
                $("#display").attr("value-one", $("#display").attr("value"));
                $("#display").attr("value", "");

                if ($("#display").attr("answer") > 0) {
                    $("#display").attr("value-one", $("#display").attr("answer"));
                }
                function sub(no1,no2) {
                    ans = no1 - no2;
                }
                for (var i = 0; i < noOfButtons; i++) {
                    numbers[i].addEventListener("click", function(){
                        var newButtonValue = this.innerHTML;
                        $("#display").attr("value-two", $("#display").attr("value"));
                        var no1 = $("#display").attr("value-one")
                        var no2 = $("#display").attr("value-two")

                        sub(no1,no2)
                        $("#display").attr("answer", ans);
                        console.log(ans);
                    });
                }
                document.addEventListener("keypress", function (event) {

                    $("#display").attr("value-two", $("#display").attr("value"));
                    var no1 = $("#display").attr("value-one")
                    var no2 = $("#display").attr("value-two")

                    sub(no1,no2)
                    $("#display").attr("answer", ans);
                    console.log(ans);

                }
            )
                break;
            // ADDITION //
            case "+":
                $("#display").attr("value-one", $("#display").attr("value"));
                $("#display").attr("value", "");
                if ($("#display").attr("answer") > 0) {
                    $("#display").attr("value-one", $("#display").attr("answer"));
                }
                function sum(no1,no2) {
                    ans = Number(no1) + Number(no2);
                }
                for (var i = 0; i < noOfButtons; i++) {
                    numbers[i].addEventListener("click", function(){
                        var newButtonValue = this.innerHTML;
                        $("#display").attr("value-two", $("#display").attr("value"));
                        var no1 = $("#display").attr("value-one")
                        var no2 = $("#display").attr("value-two")

                        sum(no1,no2)
                        $("#display").attr("answer", ans);
                        console.log(ans);
                    });
                }
                document.addEventListener("keypress", function (event) {

                    $("#display").attr("value-two", $("#display").attr("value"));
                    var no1 = $("#display").attr("value-one")
                    var no2 = $("#display").attr("value-two")

                    sum(no1,no2)
                    $("#display").attr("answer", ans);
                    console.log(ans);

                }
            )
                break;
            // EQUALS-TO //
            case "=":
                var answer = $("#display").attr("answer");
                if (Number.isInteger(Number(answer))==true) {
                    $("#display").attr("value", answer);
                    console.log(answer)
                } else {
                    var finalAnswer = Number(answer).toFixed(3);
                    $("#display").attr("value", finalAnswer);
                }
                break; 
            default:
                break;
            }
        }