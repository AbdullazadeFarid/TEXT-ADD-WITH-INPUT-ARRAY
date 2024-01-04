

var addBtn = document.querySelector(".add");
var display = document.querySelector(".display")
var scores = document.querySelector(".scores")

var user = document.querySelector(".name"); //input
var score = document.querySelector(".score") //input
var array = [];//elave elediyimiz array



addBtn.addEventListener("click", function(event){
    event.preventDefault();

    var inputValue = document.querySelector(".name_inp").value;
    var text = document.createElement("h4");
    text.classList.add("info");
    user.appendChild(text);
    // text.textContent = inputValue; //bize basga buttona klik etdikde gosterilmesi lazim oldugu ucun burda yox asagda yazirig bunu

    array.push(inputValue);

    console.log(array);


    var numvalue = document.querySelector(".number_inp").value

    var num = document.createElement("h4");
    num.classList.add("number");
    score.appendChild(num)
    // num.textContent = numvalue;   //bize basga buttona klik etdikde gosterilmesi lazim oldugu ucun burda yox asagda yazirig bunu



    display.addEventListener("click", function(event){
        event.preventDefault();

        text.textContent = inputValue;

        scores.addEventListener("click", function(event){
            event.preventDefault();

            num.textContent = numvalue;


        });
    });


});




